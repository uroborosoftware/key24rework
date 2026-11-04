const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const locales=require('../next.config').i18n.locales;
const routes=['/','/demo','/solutions/ai-call-agent','/solutions/whatsapp','/solutions/chatbot','/platform/crm','/pricing','/contact','/customers','/customers/pilot-rhineland','/resources','/resources/calculating-lost-lockout-revenue','/resources/lishi-picking-telephony-protocols','/resources/gdpr-whatsapp-locksmith-compliance','/legal/privacy','/legal/terms','/legal/cookies'];
const report=[];
async function check(locale,route){
 const url=`http://127.0.0.1:3025/${locale}${route==='/'?'':route}`;
 const response=await fetch(url,{signal:AbortSignal.timeout(90000)});
 assert.equal(response.status,200,url);
 const html=await response.text();
 assert(html.includes(`lang="${locale}"`),`${url} html language`);
 assert(html.includes(`dir="${locale==='ar-SA'?'rtl':'ltr'}"`),`${url} direction`);
 const data=JSON.parse(html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/)[1]);
 assert.equal(data.locale,locale);
 assert(Object.keys(data.props.pageProps.siteTranslations).length>3000,`${url} dictionary`);
 const body=html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi,'');
 assert(/<h[12]\b/.test(body),`${url} content`);
 if(locale==='ar-SA')assert(/<h[12]\b[^>]*>[^<]*\p{Script=Arabic}/u.test(body),`${url} translated heading`);
 if(route==='/demo'){
  const language=locale.slice(0,2);
  assert(body.includes(`/audio/key24-sample-${language}.mp3`),`${url} audio language`);
  assert(body.includes(`override-language="${language}"`),`${url} live agent language`);
  assert(body.includes('id="fullName"')&&body.includes('id="companyName"'),`${url} request form`);
 }
 report.push({locale,route,status:response.status});
}
(async()=>{
 for(const route of routes){await Promise.all(locales.map(locale=>check(locale,route)));console.log(`${route}: eight locales passed`);}
 fs.writeFileSync(path.join(__dirname,'localization-checks.json'),JSON.stringify(report,null,2));
 console.log(`${report.length} localized page responses passed.`);
})().catch(error=>{console.error(error);process.exitCode=1;});
