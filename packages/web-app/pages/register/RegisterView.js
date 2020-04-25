import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Head from "next/head";
import { Card, CardHeader, CardInner, H2 } from "@hakof/ui";

import { RegisterForm } from "../../components/RegisterForm";

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

const RegisterCard = styled(Card)`
  flex-basis: 25rem;
`;

const RegisterView = ({ translator: t }) => (
  <MainLayout>
    <Head>
      <title>{getPageTitle(t(DICTIONARY_KEYS.REGISTER_PAGE_TITLE))}</title>
    </Head>
    <Wrapper>
      <RegisterCard>
        <CardHeader>
          <H2>{t(DICTIONARY_KEYS.REGISTER_PAGE_TITLE)}</H2>
        </CardHeader>
        <CardInner>
          <RegisterForm />
        </CardInner>
      </RegisterCard>
    </Wrapper>
  </MainLayout>
);

RegisterView.propTypes = {
  translator: PropTypes.func.isRequired
};

export default RegisterView;
