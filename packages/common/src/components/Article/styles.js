import styled, { css } from "styled-components";
import { Card, CardInner } from "../Card";

export const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Content = styled(CardInner)`
  flex-grow: 1;
`;

export const Cover = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: ${props => (props.cover ? "32rem" : "auto")};
  max-height: ${props => (props.cover ? "50vh" : "auto")};
  background: ${props => (props.cover ? `url(${props.cover})` : "#fff")};
  background-position: center;
  background-size: cover;

  border-bottom: 1px #ccc solid;

  color: ${props => (props.cover ? "#fff" : "#000")};

  ${props =>
    props.cover
      ? css`
          &::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 2px 2px 0 0;
            z-index: 0;
          }

          & > div {
            z-index: 10;
            max-width: 42rem;
          }
        `
      : css``}
`;
