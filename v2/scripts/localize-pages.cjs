const fs = require('node:fs'), path=require('node:path');
function walk(dir) {
 for (const name of fs.readdirSync(dir)) {
  const file=path.join(dir,name);
  if (fs.statSync(file).isDirectory()) { if(name!=='api') walk(file); continue; }
  if (!name.endsWith('.tsx') || name.startsWith('_')) continue;
  let source=fs.readFileSync(file,'utf8');
  if(source.includes("import { getSiteTranslations }")) continue;
  source="import { getSiteTranslations } from '@/lib/site-translations';\n"+source;
  if(source.includes('export const getStaticProps')) {
   source=source.replace('async ({ params })','async ({ params, locale })').replace('props: { study }','props: { study, siteTranslations:getSiteTranslations(locale) }').replace('props: { article }','props: { article, siteTranslations:getSiteTranslations(locale) }');
  } else source+='\nexport async function getStaticProps({ locale }: { locale?: string }) { return { props: { siteTranslations:getSiteTranslations(locale) } }; }\n';
  fs.writeFileSync(file,source);
 }
}
walk(path.join(__dirname,'../src/pages'));
