import styled, { css } from "styled-components";
import { Card } from "../Card";

export const Wrapper = styled(Card)`
  display: flex;
  flex-grow: 1;
  min-height: 10rem;
  min-width: 20rem;
  box-shadow: 0 0 6px 3px #eee;
  flex-direction: ${props => (props.selected ? "column" : "row")};
  ${props =>
    props.selected
      ? css`
          margin: 0;
        `
      : css``};

  &:hover {
    box-shadow: 0 0 10px 5px #eee;
  }

  @media screen and (max-width: ${({ theme }) =>
      `${theme.mediaSizes.smMin}px`}) {
    flex-direction: column;
  }
`;

export default Wrapper;
