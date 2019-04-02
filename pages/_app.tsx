import * as React from 'react';
import App, { Container } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { GlobalStyledBox } from '../src/global.style';
import { darkTheme } from '../src/theme/dark.style';

class MyApp extends App<any, {}> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>MRX</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
          <React.Fragment>
            <Component {...pageProps}/>
          </React.Fragment>
      </Container>
    )
  }
}

export default MyApp
