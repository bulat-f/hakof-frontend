import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { getMeasureUnit } from "@hakof/theme";

const Wrapper = styled.div`
  display: ${({ shown }) => !shown && "none"};
  position: absolute;
  background-color: #fff;
  border-radius: ${({ theme: { borderRadius } }) =>
    getMeasureUnit(borderRadius)};
  border: 1px ${({ theme }) => theme.colors.lightGray} solid;
  z-index: 100;
  right: 0;
  margin: 0.25rem 0;

  &::before {
    content: "";
    position: absolute;
    height: 10px;
    width: 10px;
    top: -6px;
    right: 16px;
    transform: rotate(45deg);
    background-color: #fff;
    border-style: solid none none solid;
    border-color: #ccc;
    border-width: 1px;
  }
`;

const DropdownView = ({ children, shown }) => (
  <Wrapper shown={shown}>{children}</Wrapper>
);

DropdownView.propTypes = {
  children: PropTypes.element.isRequired,
  shown: PropTypes.bool
};

DropdownView.defaultProps = {
  shown: false
};

export { DropdownView };
