import translations from '@/data/site-translations.json';
import overrides from '@/data/site-translation-overrides.json';
import labels from '@/data/site-ui-labels.json';

// Imported only by getStaticProps; the browser receives just the selected language.
export function getSiteTranslations(locale = 'en-GB'): Record<string,string> {
  const lang=locale.slice(0,2);
  const names=(labels as Record<string,string[]>)[lang] || labels.en;
  const ui=Object.fromEntries(['AI Voice Assistant','WhatsApp Bot','Website Chatbot','CRM Panel','FAQ','ROI'].map((key,index)=>[key,names[index]]));
  return { ...(translations as Record<string,Record<string,string>>)[lang], ...(overrides as Record<string,Record<string,string>>)[lang], ...ui };
}
