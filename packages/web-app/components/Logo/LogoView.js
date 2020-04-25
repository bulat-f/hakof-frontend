import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { H2 } from "@hakof/ui";

import { Link } from "../../routes";
import { HOME } from "../../constants/pages";

const Capriola = styled(H2)`
  font-family: "Capriola", sans-serif;
  text-decoration: none;
`;

export const LogoView = ({ lang }) => (
  <Link route={HOME} params={{ lang }} passHref>
    <Capriola as="a">HAKOF |</Capriola>
  </Link>
);

LogoView.propTypes = {
  lang: PropTypes.string
};
