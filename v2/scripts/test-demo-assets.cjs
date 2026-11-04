const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const catalog=require('../src/data/sample-catalog.json');
const notices=require('../src/data/demo-customization-copy.json');
const feedback=require('../src/data/request-feedback.json');
const languages=['en','de','tr','fi','nl','no','sv','ar'];
const ids=catalog.en.map(item=>item.id).sort();
for(const language of languages){
 assert.equal(catalog[language].length,10);
 assert.deepEqual(catalog[language].map(item=>item.id).sort(),ids);
 assert(notices[language].title.length>20 && notices[language].body.includes('KEY24'));
 for(const field of ['title','local','queued','delivered','error','invalid'])assert(feedback[language][field].length>5);
 for(const item of catalog[language]){
  assert(item.src.endsWith(`-${language}.mp3`));
  const file=path.join(__dirname,'../public',item.src);
  assert(fs.statSync(file).size>10000,`${language}/${item.id} audio`);
  assert(item.lines.length>=3 && item.label.length>2);
 }
}
assert(fs.statSync(path.join(__dirname,'../public/videos/key24-intro.mp4')).size>1000000);
console.log('80 sample audio files, video, scenario parity, customization notice and feedback in all eight languages passed.');
