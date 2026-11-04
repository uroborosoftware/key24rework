import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';

export default function Document({ __NEXT_DATA__ }: DocumentProps) {
  return (
    <Html lang={__NEXT_DATA__.locale || 'en-GB'} dir={__NEXT_DATA__.locale === 'ar-SA' ? 'rtl' : 'ltr'}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23541554'/><text x='50%' y='68%' font-size='56' font-weight='bold' fill='white' text-anchor='middle' font-family='sans-serif'>K</text></svg>" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
