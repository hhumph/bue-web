import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Client, Server } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";

const engine = typeof window === "undefined" ? new Server() : new Client();

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <Component {...pageProps} />
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
