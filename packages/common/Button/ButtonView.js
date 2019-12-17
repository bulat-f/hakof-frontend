import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { darken } from "polished";
import { getComponentSize, getComponentColor } from "../helpers";

const Button = styled.button`
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  font-family: ${({ theme }) => theme.basicFont};
  font-size: ${props => getComponentSize(props, "fontSize")};
  color: ${props => getComponentColor(props, "color")};

  min-width: ${props => getComponentSize(props, "minWidth")};
  padding: ${props =>
    `${getComponentSize(props, "paddingVertical")} ${getComponentSize(
      props,
      "paddingHorizontal"
    )}`};

  border-style: solid;
  border-width: ${props => getComponentSize(props, "borderWidth")};
  border-color: ${props => getComponentColor(props, "borderColor")};
  border-radius: ${props => getComponentSize(props, "borderRadius")};

  background-color: ${props => getComponentColor(props, "backgroundColor")};

  &:hover {
    color: ${props => darken(0.05, getComponentColor(props, "color"))};
    border-color: ${props =>
      darken(0.05, getComponentColor(props, "borderColor"))};
    background-color: ${props =>
      darken(0.05, getComponentColor(props, "backgroundColor"))};
  }

  &:active,
  &:focus {
    color: ${props => darken(0.1, getComponentColor(props, "color"))};
    border-color: ${props => darken(0.1, getComponentColor(props, "borderColor"))};
    background-color: ${props =>
      darken(0.1, getComponentColor(props, "backgroundColor"))};
  }
`;

const ButtonView = props => <Button {...props} />;

ButtonView.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
  colorScheme: PropTypes.oneOf([
    "primary",
    "success",
    "info",
    "warning",
    "error"
  ]),
  mode: PropTypes.oneOf(["solid", "hollow"])
};

ButtonView.defaultProps = {
  size: "medium",
  colorScheme: "primary",
  mode: "solid"
};

export { ButtonView };
