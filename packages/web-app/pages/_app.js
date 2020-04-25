import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import { defaultTheme } from "@hakof/common";

import createStore from "../store";

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
    box-sizing: border-box;
  }
`;

class MyApp extends App {
  render() {
    const {
      Component,
      pageProps,
      router: { query },
      store,
    } = this.props;

    return (
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <LanguageContext.Provider value={query.lang || RU}>
            <Component {...pageProps} />
          </LanguageContext.Provider>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
