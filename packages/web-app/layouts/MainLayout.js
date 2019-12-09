import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Header, Grid, Button } from "@hakof/common";

import { Logo } from "../components/Logo";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

import { Link } from "../routes";
import { LOGIN } from "../constants/pages";

import { withTranslator } from "../enhancers/withTranslator";

import * as DICTIONARY_KEYS from "../dictionaries/keys";

const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-left: 20px;
  }
`;

const MainLayoutView = ({ children, lang, translator: t }) => (
  <Fragment>
    <Header logo={Logo}>
      <LeftSideContainer>
        <LanguageSwitcher />
        <Link route={LOGIN} params={{ lang }} passHref>
          <Button as="a" colorScheme="info" size="small" mode="solid">
            {t(DICTIONARY_KEYS.HEADER_SIGN_IN)}
          </Button>
        </Link>
      </LeftSideContainer>
    </Header>
    <Grid>{children}</Grid>
  </Fragment>
);

MainLayoutView.propTypes = {
  children: PropTypes.node.isRequired,
  translator: PropTypes.func.isRequired
};

const MainLayoutContainer = withTranslator(MainLayoutView);

export { MainLayoutContainer as MainLayout };
