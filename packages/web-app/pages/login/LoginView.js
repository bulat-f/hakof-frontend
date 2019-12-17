import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Head from "next/head";
import { Card, CardHeader, CardInner, H2 } from "@hakof/common";

import { LoginForm } from "../../components/LoginForm";

import { MainLayout } from "../../layouts/MainLayout";

import * as DICTIONARY_KEYS from "../../dictionaries/keys";

import { getPageTitle } from "../../helpers";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-height: calc(60vh - 4.5rem);
`;

const LoginCard = styled(Card)`
  flex-basis: 25rem;
`;

const LoginView = ({ translator: t }) => (
  <MainLayout>
    <Head>
      <title>{getPageTitle(t(DICTIONARY_KEYS.LOGIN_PAGE_TITLE))}</title>
    </Head>
    <Wrapper>
      <LoginCard>
        <CardHeader>
          <H2>{t(DICTIONARY_KEYS.LOGIN_PAGE_TITLE)}</H2>
        </CardHeader>
        <CardInner>
          <LoginForm />
        </CardInner>
      </LoginCard>
    </Wrapper>
  </MainLayout>
);

LoginView.propTypes = {
  translator: PropTypes.func.isRequired
};

export { LoginView };
