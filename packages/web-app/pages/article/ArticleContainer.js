import { compose, setStatic, withProps, withHandlers } from "recompose";
import { connect } from "react-redux";

import { ArticleView } from "./ArticleView";

import { fetchArticle, submitComment, getArticle } from "../../modules/article";

const getInitialProps = async ({ query: { slug }, store }) => {
  store.dispatch(fetchArticle(slug));

  return {};
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

const mapStateToProps = state => ({ article: getArticle(state) });
const mapDispatchToProps = {
  submitComment
};

export const ArticleContainer = compose(
  setStatic("getInitialProps", getInitialProps),
  connect(mapStateToProps, mapDispatchToProps),
  withProps(({ article }) => ({
    commentsCount: countComents(article.comments)
  })),
  withHandlers({
    handleSubmitComment: ({ slug, submitComment }) => comment =>
      submitComment(slug, comment)
  })
)(ArticleView);
