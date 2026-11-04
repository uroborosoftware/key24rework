const fs = require('node:fs');
const path = require('node:path');
const source = JSON.parse(fs.readFileSync(path.join(__dirname, 'localization-source.json'), 'utf8'));
const sourceLanguages = JSON.parse(fs.readFileSync(path.join(__dirname, 'localization-languages.json'), 'utf8'));
const output = path.join(__dirname, '../src/data/site-translations.json');
const cacheFile=path.join(__dirname,'localization-cache.json');
const dictionaries = JSON.parse(fs.readFileSync(fs.existsSync(cacheFile)?cacheFile:output, 'utf8'));
const manifestFile=path.join(__dirname,'localization-reviewed.json');
const reviewed=fs.existsSync(manifestFile)?JSON.parse(fs.readFileSync(manifestFile,'utf8')):{};
const wait = ms => new Promise(r => setTimeout(r, ms));
const save = () => {fs.writeFileSync(cacheFile, JSON.stringify(dictionaries));fs.writeFileSync(manifestFile,JSON.stringify(reviewed));};
async function request(text, language, from) {
  const url = new URL('https://translate.googleapis.com/translate_a/single');
  for (const [key, value] of Object.entries({ client:'gtx', sl:from, tl:language, dt:'t', q:text })) url.searchParams.set(key, value);
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const response = await fetch(url, { signal:AbortSignal.timeout(30000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const result = await response.json();
      return result[0].map(row => row[0] || '').join('');
    } catch (error) { if (attempt === 3) throw error; await wait(1500 * (attempt+1)); }
  }
}
async function language(lang) {
  const dictionary = dictionaries[lang] ||= {};
  const done=reviewed[lang] ||= {};
  for(const text of source)if(sourceLanguages[text]===lang){dictionary[text]=text;done[text]=true;}
  const pending = source.filter(text => !done[text]).sort((a,b)=>sourceLanguages[a].localeCompare(sourceLanguages[b]));
  const batches = []; let batch = [], size = 0;
  for (const text of pending) {
    const encodedSize=encodeURIComponent(text).length;
    if ((size + encodedSize > 6000 || sourceLanguages[text]!==sourceLanguages[batch[0]]) && batch.length) { batches.push(batch); batch=[]; size=0; }
    batch.push(text); size += encodedSize + 3;
  }
  if (batch.length) batches.push(batch);
  for (let index=0; index<batches.length; index++) {
    const texts = batches[index];
    const from=sourceLanguages[texts[0]];
    const translated = (await request(texts.join('\n'),lang,from)).split('\n');
    if (translated.length === texts.length) texts.forEach((text,i)=>dictionary[text]=translated[i].trim());
    else for (const text of texts) dictionary[text]=(await request(text,lang,from)).trim();
    texts.forEach(text=>done[text]=true);
    save(); console.log(`${lang}: ${index+1}/${batches.length} batches; ${Object.keys(dictionary).length} strings`);
    await wait(150);
  }
}
(async()=>{
  const languages=['ar','nl','fi','no','sv','tr','de','en'];
  for(let index=0;index<languages.length;index+=2) await Promise.all(languages.slice(index,index+2).map(language));
  for (const lang of Object.keys(dictionaries)) {
    if (source.some(text=>!dictionaries[lang][text])) throw new Error(`Missing ${lang} translations`);
  }
  fs.writeFileSync(output,JSON.stringify(dictionaries));
  console.log('All eight dictionaries complete. No ElevenLabs generation used.');
})().catch(error=>{ save(); console.error(error); process.exitCode=1; });
