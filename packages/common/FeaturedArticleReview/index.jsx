import React from "react";
import PropTypes from "prop-types";
import { H1, P } from "../Typography";
import Header from "./Header";
import * as Styles from "./styles";

const FeaturedArticleReview = ({ href, title, description, cover }) => (
  <Styles.Wrapper cover={cover}>
    <Styles.Link href={href} />
    <Styles.Inner>
      <Header />
      <Styles.Content>
        <H1>{title}</H1>
        <P>{description}</P>
      </Styles.Content>
    </Styles.Inner>
  </Styles.Wrapper>
);

FeaturedArticleReview.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};

export default FeaturedArticleReview;
