import styled from "styled-components";
import ReactSVG from "react-svg";
import { Card, CardInner } from "../Card/index";

export const Wrapper = styled(Card)`
  display: flex;
  min-height: 10rem;
  box-shadow: 0 0 6px 3px #eee;
  flex-direction: ${props => (props.featured ? "column" : "row")};

  &:hover {
    box-shadow: 0 0 10px 5px #eee;
  }

  @media screen and (max-width: ${({ theme }) =>
      `${theme.mediaSizes.smMin}px`}) {
    flex-direction: column;
  }
`;

export const Inner = styled(CardInner)`
  flex: 1 1 0;
`;

export const Link = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
`;

export const Content = styled.div`
  margin: 0;
`;

export const Header = styled.div`
  padding: 0 0 0.5rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    z-index: 100;
  }
`;

export const Statistics = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Icon = styled(ReactSVG).attrs({
  svgStyle: {
    height: "1.2rem",
    width: "1.2rem"
  }
})`
  display: inline-block;
  stroke: blue;
  cursor: pointer;

  &:hover {
    fill: rgba(0, 0, 255, 0.7);
  }
`;

export const Favorite = styled(Icon).attrs({
  src: "/assets/Star.svg"
})`
  fill: ${props => (props.selected ? "blue" : "transparent")};

  &:hover {
    fill: ${props => (props.selected ? "blue" : "rgba(0, 0, 255, 0.7)")};
  }
`;

export const Comments = styled(Icon).attrs({
  src: "/assets/Comment.svg"
})``;

export const CommentsCount = styled.span`
  margin: 0 0.4rem;
  cursor: pointer;
`;

export const SourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  &::before {
    content: "";
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    background-image: url(/assets/Link.svg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-right: 0.25rem;
  }
`;
