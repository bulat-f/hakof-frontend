import { compose, setStatic, withProps } from "recompose";

import { getArticle } from "@hakof/api";

import { ArticleView } from "./ArticleView";

const getInitialProps = async ({ query: { slug } }) => {
  const article = await getArticle(slug);
  return { ...article };
};

const countComents = comments => {
  if (!comments) return 0;
  const currentLvlCount = comments.length;
  const overLvlsCount = comments.reduce(
    (acc, { replies }) => acc + countComents(replies),
    0
  );

  return currentLvlCount + overLvlsCount;
};

export const ArticleContainer = compose(
  setStatic("getInitialProps", getInitialProps),
  withProps(({ comments }) => ({
    commentsCount: countComents(comments)
  }))
)(ArticleView);
