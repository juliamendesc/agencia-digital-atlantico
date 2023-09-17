import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../components/Header';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
