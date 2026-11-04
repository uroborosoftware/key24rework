const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const ts=require('typescript'),React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
const dictionary=JSON.parse(fs.readFileSync(path.join(__dirname,'../src/data/site-translations.json'),'utf8'));
const source=fs.readFileSync(path.join(__dirname,'../src/lib/localization.tsx'),'utf8');
const javascript=ts.transpileModule(source,{compilerOptions:{jsx:ts.JsxEmit.React,module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText;
const exportsObject={};
vm.runInNewContext(javascript,{exports:exportsObject,require});
const {translate,SiteLocale,LocalizedElement}=exportsObject;
for(const lang of ['en','de','tr','ar','fi','nl','no','sv']){
 const messages=dictionary[lang]; assert(messages,`${lang} dictionary`);
 assert.equal(translate('KEY24',lang,messages),'KEY24');
 assert.equal(translate('  KEY24  ',lang,messages),'  KEY24  ');
 const page=renderToStaticMarkup(React.createElement(SiteLocale.Provider,{value:{locale:lang,messages}},
  React.createElement(LocalizedElement,{as:'div'},
   React.createElement(LocalizedElement,{as:'input',placeholder:'Business or company name is required.'}),
   React.createElement(LocalizedElement,{as:'button'},React.createElement(React.Fragment,null,'Book a demo')),
   React.createElement(LocalizedElement,{as:'option',value:'tr-TR'},'Türkçe')
  )));
 assert(page.includes('Türkçe'),'language endonym preserved');
 assert(!page.includes('<Localized'),'no wrapper DOM');
 assert(page.includes('placeholder='),'input props retained');
 if(lang==='ar') assert(/\p{Script=Arabic}/u.test(page),'Arabic text server rendered');
}
const config=require('../next.config');
assert.equal(config.i18n.locales.length,8);
for(const file of ['index.tsx','demo.tsx','pricing.tsx','contact.tsx','solutions/ai-call-agent.tsx','solutions/whatsapp.tsx','solutions/chatbot.tsx','platform/crm.tsx','resources/index.tsx','resources/[slug].tsx','customers/index.tsx','customers/[slug].tsx','legal/privacy.tsx','legal/terms.tsx','legal/cookies.tsx']){
 const page=fs.readFileSync(path.join(__dirname,'../src/pages',file),'utf8');
 assert(page.includes('getSiteTranslations(locale)'),`${file} localized props`);
}
console.log('Eight locales: SSR translations, native props, fragments, brand, language names, all 15 route templates passed.');
