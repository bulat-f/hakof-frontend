import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Head from "next/head";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardInner,
  H2,
  Input,
  Button
} from "@hakof/common";

// import { Link } from "../../routes";

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
          <Row>
            <Col md={12}>
              <Input label={t(DICTIONARY_KEYS.FIELD_EMAIL)} />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Input label={t(DICTIONARY_KEYS.FIELD_PASSWORD)} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>{t(DICTIONARY_KEYS.LOGIN_FORM_SUBMIT)}</Button>
            </Col>
          </Row>
        </CardInner>
      </LoginCard>
    </Wrapper>
  </MainLayout>
);

LoginView.propTypes = {
  lang: PropTypes.string.isRequired,
  featured: PropTypes.object.isRequired,
  latest: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  translator: PropTypes.func.isRequired
};

export { LoginView };
