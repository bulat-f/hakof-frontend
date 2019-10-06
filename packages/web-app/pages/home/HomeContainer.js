import { compose, setStatic } from "recompose";

import { getArticles } from "@hakof/api";

import { HomeView } from "./HomeView";

const getInitialProps = async () => {
  const articles = await getArticles();
  return { articles };
};

export const HomeContainer = compose(
  setStatic("getInitialProps", getInitialProps)
)(HomeView);
