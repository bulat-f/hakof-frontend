import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Grid, ArticleReview } from "@hakof/common";

const HomeView = ({ articles }) => (
  <Fragment>
    <Head>
      <title>Home</title>
    </Head>

    <Grid>
      {articles.map(article => (
        <ArticleReview {...article} />
      ))}
    </Grid>
  </Fragment>
);

HomeView.propTypes = {
  articles: PropTypes.object.isRequired
};

export { HomeView };
