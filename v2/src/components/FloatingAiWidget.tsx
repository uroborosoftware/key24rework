import React from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { demoCopy, demoLanguage } from '@/data/demo-languages';
import spokenGreetings from '@/data/spoken-greetings.json';

export const FloatingAiWidget: React.FC<{ isGerman?: boolean }> = () => {
 const { locale } = useRouter();
 const lang = demoLanguage(locale); const t = demoCopy[lang];
 return (
  <>
    <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" strategy="afterInteractive" />
    {React.createElement('elevenlabs-convai', {
      key: lang,
      'agent-id': 'agent_1501m6ckj7yqepnbdptr0qg4r37a',
      'override-language': lang,
      'override-first-message': spokenGreetings[lang],
      'action-text': t.action,
      'start-call-text': t.start,
      'end-call-text': t.end,
      'language-selector': 'true',
    })}
  </>
);
};
