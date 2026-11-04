const assert=require('node:assert/strict'),fs=require('node:fs/promises'),path=require('node:path'),os=require('node:os');
const ts=require('typescript');
const root=path.join(__dirname,'..'),modules=new Map();
async function main(){
 const directory=await fs.mkdtemp(path.join(os.tmpdir(),'key24-inquiries-'));
 const previous={directory:process.env.KEY24_INTAKE_DIR,base:process.env.KEY24_CRM_API_BASE,token:process.env.KEY24_CRM_API_TOKEN,fetch:global.fetch};
 function load(file){
  if(modules.has(file))return modules.get(file).exports;
  const mod={exports:{}};modules.set(file,mod);
  const source=require('node:fs').readFileSync(file,'utf8');
  const javascript=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;
  new Function('require','module','exports',javascript)(name=>name.startsWith('@/')?load(path.join(root,'src',name.slice(2)+'.ts')):require(name),mod,mod.exports);
  return mod.exports;
 }
 const handler=load(path.join(root,'src/pages/api/leads.ts')).default;
 const send=async(body,method='POST')=>{
  const response={statusCode:200,headers:{},setHeader(name,value){this.headers[name]=value;},status(status){this.statusCode=status;return this;},json(data){this.data=data;return this;}};
  await handler({method,body},response);return response;
 };
 try{
  process.env.KEY24_INTAKE_DIR=directory;delete process.env.KEY24_CRM_API_BASE;delete process.env.KEY24_CRM_API_TOKEN;
  assert.equal((await send({},'GET')).statusCode,405);
  for(const body of [null,[],{},'invalid',{fullName:[]},{fullName:'A',phone:123}])assert.equal((await send(body)).statusCode,400);
  const valid={fullName:'Test Customer',companyName:'KEY24 Test',workEmail:'TEST@example.invalid',phone:'+44 7700 900123',kind:'demo',locale:'fi-FI',selectedPlan:'growth'};
  for(const change of [{locale:'xx-XX'},{selectedPlan:'unknown'},{phone:''},{notes:'x'.repeat(5001)}])assert.equal((await send({...valid,...change})).statusCode,400);
  assert.equal((await fs.readdir(directory)).length,0);
  const saved=await send(valid);assert.equal(saved.data.mode,'local_saved');
  const record=JSON.parse(await fs.readFile(path.join(directory,saved.data.leadId+'.json'),'utf8'));
  assert.equal(record.locale,'fi-FI');assert.equal(record.email,'test@example.invalid');assert.equal(record.kind,'demo');
  const contact=await send({kind:'contact',locale:'ar-SA',fullName:'Contact Tester',workEmail:'test@example.invalid',subject:'A service question',notes:'Please explain the available setup.'});
  assert.equal(contact.statusCode,200);assert.equal(contact.data.mode,'local_saved');
  const contactRecord=JSON.parse(await fs.readFile(path.join(directory,contact.data.leadId+'.json'),'utf8'));assert.equal(contactRecord.kind,'contact');
  const before=(await fs.readdir(directory)).length;await send({...valid,honeypot:'spam'});assert.equal((await fs.readdir(directory)).length,before);
  const parallel=await Promise.all(Array.from({length:8},()=>send(valid)));assert.equal(new Set(parallel.map(result=>result.data.leadId)).size,8);
  process.env.KEY24_CRM_API_BASE='https://crm.example.invalid';process.env.KEY24_CRM_API_TOKEN='test-only';
  global.fetch=async(url,options)=>{assert.equal(url,'https://crm.example.invalid/v1/leads');assert.equal(JSON.parse(options.body).locale,'fi-FI');return {ok:true};};
  assert.equal((await send(valid)).data.mode,'crm_live');
  global.fetch=async()=>{throw new Error('Simulated outage');};
  const queued=await send(valid);assert.equal(queued.data.mode,'crm_queued');await fs.access(path.join(directory,queued.data.leadId+'.json'));
  const blocked=path.join(directory,'not-a-directory');await fs.writeFile(blocked,'test');process.env.KEY24_INTAKE_DIR=blocked;
  assert.equal((await send(valid)).statusCode,503);
  console.log('Inquiry tests passed: validation, durable demo/contact storage, locale, concurrency, honeypot, mocked CRM delivery/outage and disk failure. No live CRM called.');
 }finally{
  for(const [name,value]of Object.entries({KEY24_INTAKE_DIR:previous.directory,KEY24_CRM_API_BASE:previous.base,KEY24_CRM_API_TOKEN:previous.token})){if(value===undefined)delete process.env[name];else process.env[name]=value;}
  global.fetch=previous.fetch;
  // The directory was created by this test under the OS temp folder.
  if(path.dirname(directory)===os.tmpdir()&&path.basename(directory).startsWith('key24-inquiries-'))await fs.rm(directory,{recursive:true,force:true});
 }
}
main().catch(error=>{console.error(error);process.exitCode=1;});
