import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const {i18n}=require('../next.config.js');
const sequence=['hero','product-video','revenue-story','roi-calculator','voice-ai','whatsapp','chatbot','crm','reviews','faq','cta'];
const routes=['/solutions/ai-call-agent','/solutions/whatsapp','/solutions/chatbot','/platform/crm'];
for(const locale of i18n.locales){
 const html=readFileSync(resolve('.next/server/pages',locale+'.html'),'utf8');
 const ids=[...html.matchAll(/ id="([^"]+)"/g)].map(m=>m[1]);
 assert.deepEqual(ids.filter(id=>sequence.includes(id)),sequence,locale+': homepage section order');
 assert.equal(new Set(ids).size,ids.length,locale+': duplicate IDs');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
 assert.ok(!html.includes('href="/resources')&&!html.includes('/resources"'),locale+': removed resource links');
 const prefix=locale===i18n.defaultLocale?'':'/'+locale;
 for(const route of routes){
  assert.ok(html.includes('href="'+prefix+route+'"'),locale+': missing service link '+route);
  const page=readFileSync(resolve('.next/server/pages',locale+route+'.html'),'utf8');
  assert.equal((page.match(/<h1[ >]/g)||[]).length,1,route+': page heading');
  for(const heading of ['benefits-heading',...(route==='/platform/crm'?[]:['scenario-heading']),'faq-section-heading','service-contact-heading']) assert.ok(page.includes('id="'+heading+'"'),route+': missing rich section '+heading);
  assert.equal((page.match(/<li/g)||[]).length>=6,true,route+': benefits and workflow content missing');
  assert.ok(page.includes('href="'+prefix+'/demo"'),route+': missing demo link');
  if(route==='/platform/crm') assert.equal((page.match(/data-crm-feature=/g)||[]).length,10,'Ten CRM feature cards must be present');
  if(route==='/solutions/chatbot') { assert.ok(page.includes('data-testid="website-chat-demo"')); assert.equal((page.match(/aria-pressed="false"/g)||[]).length,9,'Nine sample questions must be available'); }
  if(route==='/solutions/whatsapp') { assert.ok(page.includes('data-testid="whatsapp-examples"')); assert.equal((page.match(/<article/g)||[]).length,10,'Four capability cards and six WhatsApp conversations must be shown'); }
 }
 for(const m of html.matchAll(new RegExp('src="(/images/[^"?]+)"','g')))assert.ok(existsSync(resolve('public','.'+m[1])),m[1]);
 assert.ok(!html.includes('Verified KEY24'),locale+': fictional reviews must not be marked verified');
 assert.ok(html.includes('scenario-portrait-1.jpg'),locale+': scenario portraits missing');
 assert.ok(html.includes(locale.startsWith('de')?'Beispielszenario':locale.startsWith('tr')?'Örnek senaryo':'Example scenario'),locale+': scenario disclosure missing');
 console.log('PASS '+locale+': homepage sections, four service pages, navigation, assets and scenario labels');
}
