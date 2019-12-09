import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { getSize, getButtonColor } from "../helpers";

export const Input = styled.input`
  display: flex;
  flex-grow: 1;
  align-items: center;

  font-family: ${({ theme }) => theme.basicFont};
  font-size: ${props => getSize(props, "fontSize", "input")};
  color: ${props => getButtonColor(props, "color", "input")};

  border-style: solid;
  border-width: ${props => getSize(props, "borderWidth", "input")};
  border-color: ${props => getButtonColor(props, "borderColor", "input")};
  border-radius: ${props => getSize(props, "borderRadius", "input")};

  padding: ${props => `0 ${getSize(props, "paddingHorizontal", "input")}`};
  height: ${props => getSize(props, "height", "input")};
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.basicFont};
  font-size: ${props => getSize(props, "fontSize", "input")};
  font-weight: bold;
  color: ${props => getButtonColor(props, "color", "input")};
  margin: 0 8px 4px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  margin-bottom: 1rem;

  ${({ direction }) =>
    direction === "row"
      ? css`
          align-items: center;
        `
      : css``}
`;

const InputView = ({ size, direction, label, ...restProps }) => (
  <InputWrapper direction={direction}>
    {label && (
      <Label size={size} direction={direction}>
        {label}
      </Label>
    )}
    <Input size={size} direction={direction} {...restProps} />
  </InputWrapper>
);

InputView.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
  direction: PropTypes.oneOf(["column", "row"]),
  label: PropTypes.string,
  value: PropTypes.string.isRequired
};

InputView.defaultProps = {
  size: "medium",
  direction: "column",
  label: ""
};

export { InputView };
