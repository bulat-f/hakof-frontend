import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Article, CommentInput, Comment } from "@hakof/common";
import { Card, CardInner, H2 } from "@hakof/ui";

import { MainLayout } from "../../layouts/MainLayout";

const ArticleView = ({
  article: { comments, ...articleProps },
  commentsCount,
  handleSubmitComment,
}) => (
  <MainLayout>
    <Head>
      <title>{articleProps.title}</title>
    </Head>

    <Article {...articleProps} />

    {process.env.NODE_ENV !== "production" && (
      <Card>
        <CardInner>
          <H2>{commentsCount} comments</H2>
          <CommentInput submitComment={handleSubmitComment} />
          {comments.map((comment) => (
            <Comment key={`comment-${comment.id}`} {...comment} />
          ))}
        </CardInner>
      </Card>
    )}
  </MainLayout>
);

ArticleView.propTypes = {
  title: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  commentsCount: PropTypes.number.isRequired,
};

export default ArticleView;
