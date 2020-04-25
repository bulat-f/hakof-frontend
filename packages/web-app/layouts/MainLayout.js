import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Header, Grid, Button } from "@hakof/common";

import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import { Logo } from "../components/Logo";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { UserDropdown } from "../components/UserDropdown";

import { Link } from "../routes";
import { LOGIN } from "../constants/pages";

import { withTranslator } from "../enhancers/withTranslator";

import * as DICTIONARY_KEYS from "../dictionaries/keys";

import { getCurrentUser, initCurrentUser } from "../modules/user";

const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-left: 20px;
  }
`;

const MainLayoutView = ({
  children,
  currentUser,
  logout,
  lang,
  translator: t,
}) => {
  return (
    <Fragment>
      <Header logo={Logo}>
        <LeftSideContainer>
          <LanguageSwitcher />
          {currentUser ? (
            <UserDropdown />
          ) : (
            // <Link route={LOGIN} params={{ lang }} passHref>
            //   <Button as="a" colorScheme="info" size="small" mode="solid">
            //     {t(DICTIONARY_KEYS.HEADER_SIGN_IN)}
            //   </Button>
            // </Link>
            null
          )}
        </LeftSideContainer>
      </Header>
      <Grid>{children}</Grid>
    </Fragment>
  );
};

MainLayoutView.propTypes = {
  children: PropTypes.node.isRequired,
  currentUser: PropTypes.object,
  lang: PropTypes.string.isRequired,
  translator: PropTypes.func.isRequired,
};

MainLayoutView.defaultProps = {
  currentUser: null,
};

const mapStateToProps = (state) => ({ currentUser: getCurrentUser(state) });
const mapDispatchToProps = { initCurrentUser };

const MainLayoutContainer = compose(
  withTranslator,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.initCurrentUser();
    },
  })
)(MainLayoutView);

export { MainLayoutContainer as MainLayout };
