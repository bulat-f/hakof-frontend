import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Head from "next/head";
import {
  ArticleReview,
  FeaturedArticleReview,
  ArticleReviewWrapper,
  Row,
  Col,
  Card,
  H2
} from "@hakof/common";

import { Link } from "../../routes";

import { MainLayout } from "../../layouts/MainLayout";

import { ARTICLE } from "../../constants/pages";

import * as DICTIONARY_KEYS from "../../dictionaries/keys";

import { getPageTitle } from "../../helpers";

const SectionTitle = styled(H2)`
  margin: 1.5rem 0;
  text-align: center;
  text-transform: uppercase;
`;

const HomeView = ({ lang, featured, latest, selected, translator: t }) => (
  <MainLayout>
    <Head>
      <title>{getPageTitle(t(DICTIONARY_KEYS.MAIN_PAGE_TITLE))}</title>
    </Head>

    <Link route={ARTICLE} params={{ lang, slug: featured.slug }} passHref>
      <FeaturedArticleReview {...featured} />
    </Link>
    <SectionTitle>{t(DICTIONARY_KEYS.POPULAR_ARTICLES)}</SectionTitle>
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
    <Row>
      <Col>
        <SectionTitle>{t(DICTIONARY_KEYS.LATEST_ARTICLES)}</SectionTitle>
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
      </Col>
    </Row>
  </MainLayout>
);

HomeView.propTypes = {
  lang: PropTypes.string.isRequired,
  featured: PropTypes.object.isRequired,
  latest: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  translator: PropTypes.func.isRequired
};

export default HomeView;
