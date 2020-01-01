import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import {
  Article,
  Card,
  CardInner,
  H2,
  CommentInput,
  Comment
} from "@hakof/common";

import { MainLayout } from "../../layouts/MainLayout";

const ArticleView = ({
  article: { title, comments, ...restArticleProps },
  commentsCount,
  handleSubmitComment,
}) => (
  <MainLayout>
    <Head>
      <title>{title}</title>
    </Head>

    <Article title={title} {...restArticleProps} />

    <Card>
      <CardInner>
        <H2>{commentsCount} comments</H2>
        <CommentInput submitComment={handleSubmitComment} />
        {comments.map(comment => (
          <Comment key={`comment-${comment.id}`} {...comment} />
        ))}
      </CardInner>
    </Card>
  </MainLayout>
);

ArticleView.propTypes = {
  title: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  commentsCount: PropTypes.number.isRequired
};

export default ArticleView;
