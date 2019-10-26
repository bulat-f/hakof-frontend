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

import { Link } from "../../routes";

import { MainLayout } from "../../layouts/MainLayout";

import { ARTICLE } from "../../constants/pages";

const SectionTitle = styled(H2)`
  margin: 1.5rem 0;
  text-align: center;
  text-transform: uppercase;
`;

const HomeView = ({ lang, featured, latest, selected }) => (
  <MainLayout>
    <Head>
      <title>Home</title>
    </Head>

    <Grid>
      <Link route={ARTICLE} params={{ lang, slug: featured.slug }} passHref>
        <FeaturedArticleReview {...featured} />
      </Link>
      <SectionTitle>Latest articles</SectionTitle>
      {latest.map(article => (
        <Link
          key={`latest-${article.id}`}
          route={ARTICLE}
          params={{ lang, slug: article.slug }}
          passHref
        >
          <ArticleReview {...article} />
        </Link>
      ))}
      <SectionTitle>Featured articles</SectionTitle>
      <ArticleReviewWrapper>
        {selected.map(article => (
          <Link
            key={`selected-${article.id}`}
            route={ARTICLE}
            params={{ lang, slug: article.slug }}
            passHref
          >
            <ArticleReview {...article} />
          </Link>
        ))}
      </ArticleReviewWrapper>
    </Grid>
  </MainLayout>
);

HomeView.propTypes = {
  lang: PropTypes.string.isRequired,
  featured: PropTypes.object.isRequired,
  latest: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired
};

export { HomeView };
