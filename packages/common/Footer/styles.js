import styled from "styled-components";
import { P } from "../Typography";
import ReactSVG from "react-svg";

export const Wrapper = styled.footer`
  background-color: #293039;
  color: #fff;
  margin-top: 1.5rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
`;

export const Copyrights = styled(P)`
  display: inline-block;
`;

export const Contacts = styled.ul`
  display: inline-flex;
  align-items: center;
`;

export const ContactsItem = styled.li`
  display: inline-block;
  margin-left: 1rem;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Mail = styled.a`
  &:before {
    content: "hakof@mail.ru";
    display: inline-block;

    @media screen and (max-width: ${({ theme }) =>
        `${theme.mediaSizes.xsMax}px`}) {
      display: none;
    }
  }
`;

export const MailIcon = styled(ReactSVG).attrs({
  src: props => `/assets/Mail.svg`,
  svgStyle: {
    height: "1.2rem",
    width: "1.2rem"
  }
})`
  display: none;
  fill: #fff;

  @media screen and (max-width: ${({ theme }) =>
      `${theme.mediaSizes.xsMax}px`}) {
    display: inline-block;
  }
`;

export const SocialLogo = styled(ReactSVG).attrs({
  src: props => `/assets/icon-${props.social}.svg`,
  svgStyle: {
    height: "1.2rem",
    width: "1.2rem"
  }
})`
  display: inline-block;
  fill: #fff;
`;
