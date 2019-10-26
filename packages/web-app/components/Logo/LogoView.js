import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { H2 } from "@hakof/common";

import { Link } from "../../routes";

const Capriola = styled(H2)`
  font-family: "Capriola", sans-serif;
`;

export const LogoView = ({ href }) => (
  <Link to={href}>
    <Capriola as="a">HAKOF |</Capriola>
  </Link>
);

LogoView.propTypes = {
  href: PropTypes.string
};

LogoView.defaultProps = {
  href: "/"
};
