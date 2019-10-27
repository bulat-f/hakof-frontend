import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Article } from "@hakof/common";

import { MainLayout } from "../../layouts/MainLayout";

const ArticleView = ({ title, ...restProps }) => (
  <MainLayout>
    <Head>
      <title>{title}</title>
    </Head>

    <Article title={title} {...restProps} />
  </MainLayout>
);

ArticleView.propTypes = {
  title: PropTypes.string.isRequired
};

export { ArticleView };
