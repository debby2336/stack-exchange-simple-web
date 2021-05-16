import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import App, { AppContext, AppInitialProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { END } from 'redux-saga';

import { SagaStore, wrapper } from '@redux'

import { theme } from '@theme'

class WrappedApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    // 1. Wait for all page actions to dispatch
    const pageProps = {
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }

    // // 2. Stop the saga if on server
    if (ctx.req) {
      ctx.store.dispatch(END)
      await (ctx.store as SagaStore).sagaTask.toPromise()
    }

    // 3. Return props
    return {
      pageProps
    }
  }

  public render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Stack Exchange Simple Web</title>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
          />
          {/* TODO */}
          <meta name="description" content="Stack Exchange Simple Web" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider theme={createMuiTheme(theme)}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}

export default wrapper.withRedux(WrappedApp)
