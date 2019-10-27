import { compose, setStatic } from "recompose";

import { getArticles } from "@hakof/api";

import { withLang } from "../../enhancers/withLang";
import { withTranslator } from '../../enhancers/withTranslator';

import { HomeView } from "./HomeView";

import { RU } from "../../constants/languages";

const getInitialProps = async ({ query }) => {
  const articles = await getArticles(query.lang || RU);
  return { ...articles };
};

export const HomeContainer = compose(
  setStatic("getInitialProps", getInitialProps),
  withLang,
  withTranslator
)(HomeView);
