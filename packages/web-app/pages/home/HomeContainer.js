import { compose, setStatic } from "recompose";

import { getArticles } from "@hakof/api";

import { HomeView } from "./HomeView";

import { RU } from '../../constants/languages';

const getInitialProps = async ({ query }) => {
  const articles = await getArticles(query.lang || RU);
  return { ...articles };
};

export const HomeContainer = compose(
  setStatic("getInitialProps", getInitialProps),
)(HomeView);
