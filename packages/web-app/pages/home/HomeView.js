import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Head from "next/head";
import {
  Grid,
  ArticleReview,
  FeaturedArticleReview,
  ArticleReviewWrapper,
  H2
} from "@hakof/common";

import { MainLayout } from "../../layouts/MainLayout";

const SectionTitle = styled(H2)`
  margin: 1.5rem 0;
  text-align: center;
  text-transform: uppercase;
`;

const HomeView = ({ featured, latest, selected }) => (
  <MainLayout>
    <Head>
      <title>Home</title>
    </Head>

    <Grid>
      <FeaturedArticleReview {...featured} />
      <SectionTitle>Latest articles</SectionTitle>
      {latest.map(article => (
        <ArticleReview key={`latest-${article.id}`} {...article} />
      ))}
      <SectionTitle>Featured articles</SectionTitle>
      <ArticleReviewWrapper>
        {selected.map(article => (
          <ArticleReview key={`selected-${article.id}`} {...article} />
        ))}
      </ArticleReviewWrapper>
    </Grid>
  </MainLayout>
);

HomeView.propTypes = {
  featured: PropTypes.object.isRequired,
  latest: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired
};

export { HomeView };
