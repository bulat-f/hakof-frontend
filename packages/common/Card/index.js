import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  margin: 1rem 0;
  background: #fff;
  border-radius: 2px;
  border: 1px #ccc solid;
  color: blue;

  & + & {
    margin-top: 0;
  }
`;

export const CardInner = styled.div`
  padding: 1rem 1.5rem;

  @media screen and (max-width: ${({ theme }) =>
      `${theme.mediaSizes.xsMax}px`}) {
    padding: 0.8rem 0.5em;
  }
`;
