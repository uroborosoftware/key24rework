import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';

const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const html=walk('out').filter(p=>p.endsWith('.html')&&!p.includes('_next')&&!p.includes('404')&&!p.includes('_not-found'));
const titles=new Set();

// Claims this business has never verified. docs/seo-workflow.md forbids all of them;
// this turns that prohibition list into a test. Runs against visible text only, so
// chunk filenames and class names cannot trip it.
//
// One claim IS allowed: "Familienbetrieb seit 15 Jahren", confirmed by the owner on
// 2026-11-01 and recorded in src/lib/business.ts. It is deliberately not matched below.
// Anything else of that shape — ratings, job counts, certifications, response times —
// stays blocked until it is confirmed the same way.
const FORBIDDEN_CLAIMS=/24\s*\/\s*7|rund um die Uhr|zertifiziert|TÜV-gepr|\bversichert\b|garantiert|in \d+\s*(?:min\b|Minuten)|★|\d+\s*Bewertungen|kostenlose Anfahrt|Jahre Erfahrung/i;
const visibleText=s=>s.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ');
const pagePath=file=>{const r=path.relative('out',file).split(path.sep).slice(0,-1).join('/');return r?`/${r}/`:'/';};

let links=0;
for(const file of html){
 const s=fs.readFileSync(file,'utf8');
 const text=visibleText(s);
 assert.doesNotMatch(text,/ChatGPT|OpenAI|Codex|Namaken|AI-generated|yapay zek[aâ]|Türkçe önizleme|Türkçe inceleme sürümü/i,file+' no visitor-facing production notes or AI branding');
 assert.doesNotMatch(text,/Tresoröffnung|Tresoren/,file+' removed safe-opening service');
 assert.match(s,/<html[^>]*lang="de"/,file+' document language');
 assert.equal((s.match(/<h1\b/g)||[]).length,1,file+' single H1');
 assert.match(s,/<title>[^<]+<\/title>/,file+' title');
 const title=s.match(/<title>([^<]+)<\/title>/)[1];
 assert.ok(!titles.has(title),file+' unique title');titles.add(title);
 assert.match(s,/<meta name="description" content="[^"]+"/,file+' description');
 assert.doesNotMatch(s,/Autosleutelnamaken|CarKey24|KVK|31611751231|autosleutel|Nu bereikbaar|Afspraak maken|Nooddienst|images\.unsplash/i,file+' former business');
 assert.doesNotMatch(text,FORBIDDEN_CLAIMS,file+' unverified claim');
 const canonical=s.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i);
 assert.ok(canonical,file+' canonical');
 assert.equal(new URL(canonical[1]).pathname,pagePath(file),file+' canonical target');
 assert.doesNotMatch(s,/<link[^>]*hrefLang=/i,file+' temporary review not advertised as an indexed language alternate');
 for(const [,url] of s.matchAll(/(?:href|src)="([^"#?]+)(?:[?#][^"]*)?"/g)){
   if(!url.startsWith('/')||url.startsWith('//'))continue;
   const dest=path.join('out',decodeURIComponent(url));
   assert.ok(fs.existsSync(dest),file+' missing '+url);links++;
 }
 const faqBlocks=[...s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(([,j])=>JSON.parse(j));
 assert.ok(faqBlocks.filter(j=>j['@type']==='FAQPage').length<=1,file+' at most one FAQPage');
}

const autoPage=fs.readFileSync('out/leistungen/autooeffnung/index.html','utf8');
const serviceImagePaths=[...fs.readFileSync('out/leistungen/index.html','utf8').matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)].map(([,src])=>src);
assert.equal(serviceImagePaths.length,14,'one photograph per service');
assert.equal(new Set(serviceImagePaths).size,14,'different image for each service');
assert.match(visibleText(autoPage),/ab 159 €/,'vehicle opening starting price');
assert.match(autoPage,/\/demir\/auto-tueroeffnung.webp/,'vehicle opening photo');
assert.match(autoPage,/Berechtigung/,'vehicle authorization requirement');
const autoSchema=[...autoPage.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(([,j])=>JSON.parse(j)).find(j=>j['@type']==='Service');
assert.equal(autoSchema.offers.price,159,'vehicle opening offer price');
for(const slug of ['autoschluessel','schlosswechsel','mehrfachverriegelung','schliessanlagen','einbruchschutz','sicherheitstechnik']){
 const page=fs.readFileSync('out/leistungen/'+slug+'/index.html','utf8');
 assert.match(page,/tel:\+491721416144/,slug+' enquiry telephone');
 assert.match(page,/Anfrage besprechen/,slug+' enquiry link');
 assert.ok(fs.readFileSync('out/leistungen/index.html','utf8').includes('/leistungen/'+slug+'/'),slug+' listed service');
}

// Indexing is driven by data/location-editorial.json, never hand-maintained in TS,
// so the meta tag, the sitemap and this test can never drift apart.
const editorial=JSON.parse(fs.readFileSync('data/location-editorial.json','utf8')).locations;
const noindexBySlug=new Map(editorial.map(l=>[l.slug,l.noindex]));
const cities=fs.readdirSync('out/tueroeffnung').filter(n=>fs.existsSync('out/tueroeffnung/'+n+'/index.html'));
assert.equal(cities.length,18,'18 city routes');

for(const city of cities){
 const s=fs.readFileSync('out/tueroeffnung/'+city+'/index.html','utf8');
 assert.match(s,/tel:\+491721416144/,city+' phone');
 const robots=/<meta name="robots" content="[^"]*noindex/.test(s);
 assert.equal(robots,noindexBySlug.get(city),city+' robots must match editorial noindex');
 assert.match(s,/Schlüsseldienst/,city+' locksmith search intent');
 assert.ok(s.includes('/leistungen/schliessanlagen/'),city+' specialist service linked');
}

const photos=JSON.parse(fs.readFileSync('data/photo-credits.json','utf8'));
assert.equal(photos.filter(p=>p.kind==='city').length,18);
assert.equal(new Set(photos.map(p=>p.original)).size,photos.length,'unique remote photos');
assert.equal(new Set(photos.map(p=>crypto.createHash('sha256').update(fs.readFileSync('public'+p.src)).digest('hex'))).size,photos.length,'unique image files');
for(const city of cities){const p=photos.find(p=>p.kind==='city'&&p.id===city);assert.ok(p?.author&&p?.license&&p?.source,city+' attribution');assert.ok(fs.readFileSync('out/tueroeffnung/'+city+'/index.html','utf8').includes(p.src),city+' own city image');}

assert.ok(!fs.existsSync('out/tr'),'Turkish review routes removed');
for(const file of walk('out')){
 const parts=path.relative('out',file).split(path.sep);
 const index=parts.findIndex(part=>part.startsWith('__next.'));
 assert.ok(index<0||index===parts.length-1,'browser-addressable export segment: '+file);
}
const sitemap=fs.readFileSync('out/sitemap.xml','utf8');
assert.doesNotMatch(sitemap,/\/tr\//,'temporary Turkish review excluded from sitemap');
for(const city of cities){
 const inSitemap=sitemap.includes('/tueroeffnung/'+city+'/');
 assert.equal(inSitemap,!noindexBySlug.get(city),city+' sitemap membership must match indexing');
}

assert.match(fs.readFileSync('src/components/MapConsent.tsx','utf8'),/useState\(false\)/);

const keywordRows=fs.readFileSync('docs/keyword-map-2026-11-08.csv','utf8').trim().split(/\r?\n/).slice(1);
assert.equal(keywordRows.length,396,'22 keyword themes across 18 cities');
for(const row of keywordRows){
 const target=row.match(/,"(\/[^\"]*)"/)[1];
 assert.ok(fs.existsSync(path.join('out',target,'index.html')),'keyword target exists: '+target);
}

const original=process.env.TEMPLATE_SOURCE;
let styles=0;
if(original){for(const p of walk('src').filter(p=>p.endsWith('.css')).concat('src/lib/fonts.ts','design/styles.json')){const a=fs.readFileSync(p);const b=fs.readFileSync(path.join(original,p));assert.equal(crypto.createHash('sha256').update(a).digest('hex'),crypto.createHash('sha256').update(b).digest('hex'),p+' original design');styles++;}}

console.log(JSON.stringify({
 pages:html.length,
 internalReferences:links,
 locations:cities.length,
 indexedLocations:cities.filter(c=>!noindexBySlug.get(c)).length,
 noindexDrafts:cities.filter(c=>noindexBySlug.get(c)).length,
 originalDesignFilesVerified:styles,
 status:'passed',
},null,2));
