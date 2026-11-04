import { getSiteTranslations } from '@/lib/site-translations';
import { LocalizedElement as Key24LocalizedElement, LocalizedHead as Key24LocalizedHead, LocalizedLink as Key24LocalizedLink } from '@/lib/localization';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navigation } from '@/components/Navigation';
import { SlackLanding } from '@/components/SlackLanding';
import { Footer } from '@/components/Footer';
import { FloatingAiWidget } from '@/components/FloatingAiWidget';

export default function HomePage() {
  const router = useRouter();
  const currentLocale = router.locale || 'en';
  const isTr = currentLocale.startsWith('tr');
  const isDe = currentLocale.startsWith('de');
  const isEn = !isTr && !isDe;

  const pageTitle = isTr
    ? 'KEY24 | Sen İşini Yap, Gerisini KEY24’e Bırak'
    : isDe
    ? 'KEY24 | Mach du deinen Job, den Rest erledigt KEY24'
    : 'KEY24 | Do Your Job, Leave the Rest to KEY24';

  const pageDesc = isTr
    ? 'Oto çilingirleri için 7/24 sesli yapay zeka santrali, WhatsApp iş kurtarma, web chatbotu ve Google Ads click-fraud kalkanı.'
    : isDe
    ? '24/7 KI-Telefonzentrale, WhatsApp-Auftragsrettung, Web-Chatbot mit +25% Conversion und Google-Ads Click-Fraud-Schutz für Kfz-Schlüsseldienste.'
    : '24/7 Autonomous Voice AI, WhatsApp revenue recovery, web chatbot with +25% conversion lift, and click-fraud shield for automotive locksmiths.';

  return (
    <>
      <Key24LocalizedHead>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:locale" content={currentLocale} />
        <link rel="canonical" href={`https://key24.ai${currentLocale==='en-GB'?'':'/'+currentLocale}${router.asPath}`} />
      </Key24LocalizedHead>

      <Navigation locale={currentLocale} />

      <Key24LocalizedElement as="main" id="main-content">
        <SlackLanding locale={currentLocale} />
      </Key24LocalizedElement>

      <Footer />
      <FloatingAiWidget isGerman={isDe} />
    </>
  );
}

export async function getStaticProps({ locale }: { locale?: string }) { return { props: { siteTranslations:getSiteTranslations(locale) } }; }
