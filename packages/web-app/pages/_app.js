import React from "react";
import App from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { defaultTheme } from "@hakof/common";

import { LanguageContext } from "../contexts/LanguageContext";
import { RU } from "../constants/languages";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Capriola&display=swap');

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #e9e7da;
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps, router: { query } } = this.props;

    return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <LanguageContext.Provider value={query.lang || RU}>
          <Component {...pageProps} />
        </LanguageContext.Provider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
