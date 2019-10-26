import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Grid, Article } from "@hakof/common";

import { MainLayout } from "../../layouts/MainLayout";

const ArticleView = ({ title, ...restProps }) => (
  <MainLayout>
    <Head>
      <title>{title}</title>
    </Head>

    <Grid>
      <Article title={title} {...restProps} />
    </Grid>
  </MainLayout>
);

ArticleView.propTypes = {
  title: PropTypes.string.isRequired
};

export { ArticleView };
