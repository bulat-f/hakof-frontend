import { compose, setStatic } from "recompose";

import { getArticle } from "@hakof/api";

import { ArticleView } from "./ArticleView";

const getInitialProps = async ({ query: { slug } }) => {
  const article = await getArticle(slug);
  return { ...article };
};

export const ArticleContainer = compose(
  setStatic("getInitialProps", getInitialProps)
)(ArticleView);
