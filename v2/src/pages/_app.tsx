import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';
import '@/styles/globals.scss';
import { useRouter } from 'next/router';
import { SiteLocale } from '@/lib/localization';

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  useEffect(() => {
    document.documentElement.lang=locale || 'en-GB';
    document.documentElement.dir=locale === 'ar-SA' ? 'rtl' : 'ltr';
  },[locale]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <SiteLocale.Provider value={{locale:locale || 'en-GB',messages:pageProps.siteTranslations || {}}}><div dir={locale === 'ar-SA' ? 'rtl' : 'ltr'} lang={locale || 'en-GB'}><Component {...pageProps} /></div></SiteLocale.Provider>
    </>
  );
}

