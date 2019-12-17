import styled from "styled-components";
import { lighten } from "polished";
import { getMeasureUnit } from "../helpers";

export const Alert = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, type }) => theme.colors[type]};
  border-radius: ${({ theme }) => getMeasureUnit(theme.borderRadius)};

  background-color: ${({ theme, type }) => lighten(0.35, theme.colors[type])};

  font-family: ${({ theme }) => theme.basicFont};
  font-size: ${({ theme }) => getMeasureUnit(theme.alert.fontSize)};
  color: ${({ theme, type }) => theme.colors[type]};

  margin-right: ${({ theme }) => getMeasureUnit(theme.alert.marginHorizontal)};
  margin-left: ${({ theme }) => getMeasureUnit(theme.alert.marginHorizontal)};
  margin-bottom: ${({ theme }) => getMeasureUnit(theme.alert.marginVertical)};
  padding: ${({ theme }) =>
    `${getMeasureUnit(theme.alert.paddingVertical)} ${getMeasureUnit(
      theme.alert.paddingHorizontal
    )}`};
`;
