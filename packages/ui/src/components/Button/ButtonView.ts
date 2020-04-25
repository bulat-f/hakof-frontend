import styled from "styled-components";
import { darken } from "polished";
import { getComponentSize, getComponentColor } from "@hakof/theme";

enum Size {
  large = "large",
  medium = "medium",
  small = "small",
}

enum ColorScheme {
  primary = "primary",
  success = "success",
  info = "info",
  warning = "warning",
  error = "error",
}

enum Mode {
  solid = "solid",
  hollow = "hollow",
}

interface IProps {
  size: Size;
  colorScheme: ColorScheme;
  mode: Mode;
}

const ButtonView = styled.button<IProps>`
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  font-family: ${({ theme }) => theme.basicFont};
  font-size: ${(props) => getComponentSize(props, "fontSize")};
  color: ${(props) => getComponentColor(props, "color")};

  min-width: ${(props) => getComponentSize(props, "minWidth")};
  padding: ${(props) =>
    `${getComponentSize(props, "paddingVertical")} ${getComponentSize(
      props,
      "paddingHorizontal"
    )}`};

  border-style: solid;
  border-width: ${(props) => getComponentSize(props, "borderWidth")};
  border-color: ${(props) => getComponentColor(props, "borderColor")};
  border-radius: ${(props) => getComponentSize(props, "borderRadius")};

  background-color: ${(props) => getComponentColor(props, "backgroundColor")};

  &:hover {
    color: ${(props) => darken(0.05, getComponentColor(props, "color"))};
    border-color: ${(props) =>
      darken(0.05, getComponentColor(props, "borderColor"))};
    background-color: ${(props) =>
      darken(0.05, getComponentColor(props, "backgroundColor"))};
  }

  &:active,
  &:focus {
    color: ${(props) => darken(0.1, getComponentColor(props, "color"))};
    border-color: ${(props) =>
      darken(0.1, getComponentColor(props, "borderColor"))};
    background-color: ${(props) =>
      darken(0.1, getComponentColor(props, "backgroundColor"))};
  }
`;

ButtonView.defaultProps = {
  size: Size.medium,
  colorScheme: ColorScheme.primary,
  mode: Mode.solid,
};

export { ButtonView };
