const fs=require('node:fs'),path=require('node:path'),ts=require('typescript');
const languages=new Set(['en','de','tr','ar','nl','fi','no','sv']);
const sources={};
const normalize=s=>s.replace(/\s+/g,' ').trim();
function add(text,language) {
 text=normalize(text);
 if(!/\p{L}/u.test(text)||/[{}]|^[/#.]|^https?:|^[^\s@]+@[^\s@]+$|\.module\.|^--/.test(text)||text.length<2||text.length>2500)return;
 sources[text]=language || (/\p{Script=Arabic}/u.test(text)?'ar':/[ıİğĞşŞ]/.test(text)?'tr':/[äöüÄÖÜß]|\b(für|und|DSGVO|Kfz|Datenschutz)\b/.test(text)?'de':'en');
}
function infer(node,tree) {
 for(let p=node;p.parent;p=p.parent){
  const parent=p.parent;
  if(ts.isPropertyAssignment(parent)){
   const key=parent.name.getText(tree).replace(/['"]/g,'').slice(0,2);
   if(languages.has(key)&&/^['"]?(en|de|tr|ar|nl|fi|no|sv)(-\w+)?['"]?$/.test(parent.name.getText(tree)))return key;
  }
  if(ts.isConditionalExpression(parent)){
   const condition=parent.condition.getText(tree);
   const yes=p===parent.whenTrue;
   if(/isGerman|isDe\b|startsWith\(['"]de/.test(condition)&&yes)return 'de';
   if(/isTr\b|startsWith\(['"]tr/.test(condition)&&yes)return 'tr';
   if(/isEn\b|isEnglish/.test(condition))return yes?'en':'de';
  }
 }
}
function walk(dir){for(const name of fs.readdirSync(dir)){
 const file=path.join(dir,name);
 if(fs.statSync(file).isDirectory()){walk(file);continue;}
 if(!/\.(tsx?|json)$/.test(name)||/site-translations|site-content/.test(name))continue;
 const source=fs.readFileSync(file,'utf8');
 if(name.endsWith('.json')){
  function json(value,lang){if(typeof value==='string')add(value,lang);else if(value&&typeof value==='object')for(const [key,item]of Object.entries(value))json(item,languages.has(key)?key:lang);}
  json(JSON.parse(source),languages.has(name.slice(0,2))?name.slice(0,2):undefined);
 }else{
  const tree=ts.createSourceFile(file,source,99,true);
  function visit(node){const propertyName=node.parent&&ts.isPropertyAssignment(node.parent)&&node.parent.name===node;if(!propertyName&&(ts.isStringLiteral(node)||ts.isNoSubstitutionTemplateLiteral(node)||ts.isJsxText(node)))add(node.text,infer(node,tree));ts.forEachChild(node,visit);}
  visit(tree);
 }
}}
walk(path.join(__dirname,'../src'));
const languageFile=path.join(__dirname,'localization-languages.json');
const previous=fs.existsSync(languageFile)?JSON.parse(fs.readFileSync(languageFile,'utf8')):{};
const reviewFile=path.join(__dirname,'localization-reviewed.json');
if(fs.existsSync(reviewFile)){
 const reviewed=JSON.parse(fs.readFileSync(reviewFile,'utf8'));
 for(const [text,language]of Object.entries(sources))if(previous[text]!==language)for(const dictionary of Object.values(reviewed))delete dictionary[text];
 fs.writeFileSync(reviewFile,JSON.stringify(reviewed));
}
fs.writeFileSync(path.join(__dirname,'localization-source.json'),JSON.stringify(Object.keys(sources),null,2));
fs.writeFileSync(path.join(__dirname,'localization-languages.json'),JSON.stringify(sources,null,2));
console.log(Object.entries(sources).reduce((counts,[,lang])=>(counts[lang]=(counts[lang]||0)+1,counts),{}));
