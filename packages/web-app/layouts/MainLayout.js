import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Header, Grid } from "@hakof/common";

import { Logo } from "../components/Logo";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

const MainLayout = ({ children }) => (
  <Fragment>
    <Header logo={Logo}>
      <Fragment>
        <LanguageSwitcher />
      </Fragment>
    </Header>
    <Grid>{children}</Grid>
  </Fragment>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export { MainLayout };
