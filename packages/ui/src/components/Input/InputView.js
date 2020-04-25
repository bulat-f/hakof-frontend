import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { getComponentSize, getInputColor } from "@hakof/theme";

export const Input = styled.input`
  display: flex;
  flex-grow: 1;
  align-items: center;

  font-family: ${({ theme }) => theme.basicFont};
  font-size: ${props => getComponentSize(props, "fontSize", "input")};
  color: ${props => getInputColor(props, "color", "input")};

  border-style: solid;
  border-width: ${props => getComponentSize(props, "borderWidth", "input")};
  border-color: ${props => getInputColor(props, "borderColor", "input")};
  border-radius: ${props => getComponentSize(props, "borderRadius", "input")};

  padding: ${props =>
    `0 ${getComponentSize(props, "paddingHorizontal", "input")}`};
  height: ${props => getComponentSize(props, "height", "input")};
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.basicFont};
  font-size: ${props => getComponentSize(props, "fontSize", "input")};
  font-weight: bold;
  color: ${props => getInputColor(props, "color", "input")};
  margin: 0 8px 4px 0;
`;

export const Error = styled.span`
  font-family: ${({ theme }) => theme.basicFont};
  font-size: ${props => getComponentSize(props, "fontSize", "input")};
  color: ${({ theme }) => theme.colors.error};
  margin: 2px 0 -10px;
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

const InputView = ({
  size,
  direction,
  label,
  error,
  touched,
  ...restProps
}) => {
  const hasError = touched && Boolean(error);

  return (
    <InputWrapper direction={direction}>
      {label && (
        <Label size={size} direction={direction} hasError={hasError}>
          {label}
        </Label>
      )}
      <Input
        size={size}
        direction={direction}
        hasError={hasError}
        {...restProps}
      />
      {hasError && <Error size={size}>{error}</Error>}
    </InputWrapper>
  );
};

InputView.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
  direction: PropTypes.oneOf(["column", "row"]),
  label: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputView.defaultProps = {
  size: "medium",
  direction: "column",
  label: "",
  error: "",
  touched: false
};

export { InputView };
