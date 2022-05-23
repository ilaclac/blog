import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { GlobalStyle } from "@styles/globalStyles";
import UniversalHead from "../components/UniversalHead";
import Layout from "../components/Layout";
import { HelloProvider, withHelloMsg } from "@context/HelloContext";

const metaData = {
  title: "Q Agency Task Blog",
  metaDescription: "some SEO meta description",
  metaKeywords: "q agency, frontend, task, job",
  ogTitle: "This is a link preview title",
  ogDescription: "some link preview description",
  ogUrl: "",
  ogImage: {
    url: "",
    width: 500,
    height: 500,
  },
  preventIndexing: false,
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const EnhancedComponent = withHelloMsg(Component);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HelloProvider>
        {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
        <UniversalHead metaData={metaData} setValue={() => {}} />
        <Layout>
          <EnhancedComponent {...pageProps} />
        </Layout>
      </HelloProvider>
    </ThemeProvider>
  );
};

export default MyApp;
