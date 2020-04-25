import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { P } from "../Typography";

const Wrapper = styled.div``;

const Rating = styled(P)`
  margin: 0 0.25rem;
  color: ${({ isPositive, theme: { colors } }) =>
    isPositive ? colors.success : colors.warning};
`;

const Action = styled(P)`
  cursor: pointer;
  color: ${({ isActed, activeColor, theme: { colors } }) =>
    isActed
      ? colors[activeColor] || activeColor || colors.success
      : colors.gray};

  &:hover {
    color: ${({ activeColor, theme: { colors } }) =>
      colors[activeColor] || activeColor || colors.success};
  }
`;

const RatingView = ({ rating, isLiked, isDisliked }) => (
  <Wrapper>
    <Action as="span" isActed={isLiked}>
      Like
    </Action>
    <Rating as="span" activeColor="success" isPositive={rating >= 0}>
      {rating}
    </Rating>
    <Action as="span" activeColor="warning" isActed={isDisliked}>
      Dislike
    </Action>
  </Wrapper>
);

RatingView.propTypes = {
  rating: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  isDisliked: PropTypes.bool.isRequired
};

export { RatingView };
