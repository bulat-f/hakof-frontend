import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.8rem;
  margin: 0.5rem 0;
`;

export const H2 = styled.h2`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.4rem;
  margin: 0.4rem 0;
`;

export const P = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  margin: 0.5rem 0;
`;
