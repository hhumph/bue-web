import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head'
import { Client, Server } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider } from "baseui";
import { theme } from '../theme';

import { Layout } from "../components/Layout/Layout";

const engine = typeof window === "undefined" ? new Server() : new Client();

// TODO: get all services
// TODO: get all coaches

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
