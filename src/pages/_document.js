import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import Custom404 from './404';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
        <Custom404 />
        <NextScript />
      </body>
    </Html>
  );
}
