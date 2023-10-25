import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="pt">
      <Head>
        <link rel='canonical' href='https://digitalatlantico.com/' />
        <link rel='alternate' href='https://www.digitalatlantico.com/' hrefLang='pt-pt' />
        <link
          rel="preload"
          href="/fonts/Caveat"
          as="font"
          type="font/tff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Lato"
          as="font"
          type="font/tff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Open_Sans"
          as="font"
          type="font/tff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Poppins"
          as="font"
          type="font/tff"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
