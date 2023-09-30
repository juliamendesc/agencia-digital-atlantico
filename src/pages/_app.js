import React from 'react';
import PropTypes from 'prop-types';
import { Analytics } from '@vercel/analytics/react';
import { Header } from 'src/components/Header';
import 'src/styles/globals.scss';
import Head from 'next/head';
import { Caveat, Lato, OpenSans, Poppins } from 'src/styles/fonts.css';

export const caveat = Caveat({
  weight: [400, 700],
});

export const lato = Lato({
  weight: [400, 700],
});

export const openSans = OpenSans({
  weight: [300, 400],
});

export const poppins = Poppins({
  weight: [300, 400, 700],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="" />
        <title>Digital Atlântico</title>
        <meta
          name="description"
          content="Digital Atlântico, especializada em marketing digital, gestão de redes sociais, anúncios no google, youtube, instagram e facebook."
        />
        <meta
          name="keywords"
          content="marketing digital, redes sociais, anúncios, google, youtube, instagram, facebook, ads, advertisement, digital, atlântico, digital atlântico, digital atlantico, agência de marketing digital, agencia de marketing digital, agência de publicidade e marketing, agencia de publicidade e marketing,  agência de marketing digital em lisboa, agencia de marketing digital em lisboa, agência de marketing digital em lisboa portugal, agencia de marketing digital em lisboa portugal"
        />
        <meta
          name="author"
          content="Julia Mendes de Carvalho, https://github.com/juliamendesc"
        />
        <meta
          name="author"
          content="Luiz Leonardo Lima Pereira, https://github.com/luizleo2"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="Global" />
        <meta name="language" content="Portuguese" />
        <meta name="revisit-after" content="1 days" />
        <meta name="generator" content="NextJS" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Digital Atlântico" />
        <meta
          property="og:description"
          content="Digital Atlântico, especializada em marketing digital, gestão de redes sociais, anúncios no google, youtube, instagram e facebook."
        />
        <meta property="og:site_name" content="Digital Atlântico" />
        <meta property="og:url" content="https://digitalatlantico.com/" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Analytics mode={'production'} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
