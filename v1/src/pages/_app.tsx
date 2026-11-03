import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.scss';
import { useRouter } from 'next/router';
import { NordicDutchSite } from '@/components/NordicDutchSite';
import { demoLanguage } from '@/data/demo-languages';

export default function App({ Component, pageProps }: AppProps) {
  const { locale, pathname } = useRouter();
  const lang = demoLanguage(locale);
  const localizedPage = ['/', '/demo', '/solutions/ai-call-agent', '/solutions/whatsapp', '/solutions/chatbot', '/platform/crm', '/pricing', '/contact'].includes(pathname);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      {localizedPage && (lang==='fi'||lang==='nl'||lang==='no'||lang==='sv'||lang==='ar')?<NordicDutchSite language={lang}/>:<Component {...pageProps} />}
    </>
  );
}

