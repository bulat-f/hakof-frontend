import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Header, Grid, Button } from "@hakof/common";

import { Logo } from "../components/Logo";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-left: 20px;
  }
`;

const MainLayout = ({ children }) => (
  <Fragment>
    <Header logo={Logo}>
      <LeftSideContainer>
        <LanguageSwitcher />
        <Button colorScheme="info" size="small" mode="solid">
          Login
        </Button>
      </LeftSideContainer>
    </Header>
    <Grid>{children}</Grid>
  </Fragment>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export { MainLayout };
