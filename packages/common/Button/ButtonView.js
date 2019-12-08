import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { darken } from "polished";
import { getMeasureUnit, getColor } from "../helpers";

const getSize = ({ theme, size }, prop) =>
  getMeasureUnit(theme.button[size][prop]);

const getButtonColor = ({ theme, colorScheme, mode }, prop) => {
  const schemeColor = theme.button[mode][prop];
  const colorName = theme.button[colorScheme][schemeColor] || schemeColor;
  return getColor(theme, colorName);
};

const Button = styled.button`
  text-align: center;
  cursor: pointer;

  font-family: ${({ theme }) => theme.basicFont};
  font-size: ${props => getSize(props, "fontSize")};
  color: ${props => getButtonColor(props, "color")};

  min-width: ${props => getSize(props, "minWidth")};
  padding: ${props =>
    `${getSize(props, "paddingVertical")} ${getSize(
      props,
      "paddingHorizontal"
    )}`};

  border-style: solid;
  border-width: ${props => getSize(props, "borderWidth")};
  border-color: ${props => getButtonColor(props, "borderColor")};
  border-radius: ${props => getSize(props, "borderRadius")};

  background-color: ${props => getButtonColor(props, "backgroundColor")};

  &:hover {
    color: ${props => darken(0.05, getButtonColor(props, "color"))};
    border-color: ${props =>
      darken(0.05, getButtonColor(props, "borderColor"))};
    background-color: ${props =>
      darken(0.05, getButtonColor(props, "backgroundColor"))};
  }

  &:active,
  &:focus {
    color: ${props => darken(0.1, getButtonColor(props, "color"))};
    border-color: ${props => darken(0.1, getButtonColor(props, "borderColor"))};
    background-color: ${props =>
      darken(0.1, getButtonColor(props, "backgroundColor"))};
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
