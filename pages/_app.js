import '../styles/globals.css'
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Color Gradient Generator</title>
        <meta author="Jewel Shahi" content="This is my another React.js/Next.js project" />
        <link rel="icon" href="/colorgradient.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
