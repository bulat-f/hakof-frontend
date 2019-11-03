import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Article, Card, CardInner, H2, Comment } from "@hakof/common";

import { MainLayout } from "../../layouts/MainLayout";

const ArticleView = ({ title, comments, commentsCount, ...restProps }) => (
  <MainLayout>
    <Head>
      <title>{title}</title>
    </Head>

    <Article title={title} {...restProps} />

    <Card>
      <CardInner>
        <H2>{commentsCount} comments</H2>
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

export { ArticleView };
