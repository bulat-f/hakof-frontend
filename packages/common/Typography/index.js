import styled from "styled-components";
import { getColor } from "../helpers";

export const H1 = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.8rem;
  margin: 0.5rem 0;
  color: ${({ theme, color }) =>
    getColor(theme, color) || getColor(theme, "text")};
`;

export const H2 = styled.h2`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.4rem;
  margin: 0.4rem 0;
  color: ${({ theme, color }) =>
    getColor(theme, color) || getColor(theme, "text")};
`;

export const P = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  line-height: 1.5;
  margin: 0.5rem 0;
  color: ${({ theme, color }) =>
    getColor(theme, color) || getColor(theme, "text")};
`;
