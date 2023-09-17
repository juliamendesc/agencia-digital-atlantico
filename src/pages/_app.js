import React from 'react';
import PropTypes from 'prop-types';
import { Analytics } from '@vercel/analytics/react';
import { Header } from 'src/components/Header';
import 'src/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
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
