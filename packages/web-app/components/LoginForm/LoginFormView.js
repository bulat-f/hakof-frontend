import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Row, Col, Input, Button, P, Alert } from "@hakof/ui";

import { Link } from "../../routes";
import { REGISTER } from "../../constants/pages";

import * as DICTIONARY_KEYS from "../../dictionaries/keys";

const ErrorList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ErrorListItem = styled.li`
  & + & {
    margin-top: 0.5rem;
  }
`;

const ButtonWrapper = styled(Col)`
  display: flex;
  align-items: center;

  > * {
    margin-right: 0.5rem;
  }
`;

const RegisterLink = styled(P).attrs({ as: "a" })``;

const LoginFormView = ({
  globalErrors,
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  translator: t,
  lang
}) => (
  <form onSubmit={handleSubmit}>
    {globalErrors && globalErrors.length > 0 && (
      <Row>
        <Col>
          <Alert type="error">
            <ErrorList>
              {globalErrors.map((error, index) => (
                <ErrorListItem key={`error-${index}`}>{error}</ErrorListItem>
              ))}
            </ErrorList>
          </Alert>
        </Col>
      </Row>
    )}
    <Row>
      <Col md={12}>
        <Input
          type="email"
          name="email"
          label={t(DICTIONARY_KEYS.FIELD_EMAIL)}
          value={values.email}
          error={errors.email}
          touched={touched.email}
          onChange={handleChange}
        />
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <Input
          type="password"
          name="password"
          label={t(DICTIONARY_KEYS.FIELD_PASSWORD)}
          value={values.password}
          error={errors.password}
          touched={touched.password}
          onChange={handleChange}
        />
      </Col>
    </Row>
    <Row>
      <ButtonWrapper>
        <Button type="submit">{t(DICTIONARY_KEYS.LOGIN_FORM_SUBMIT)}</Button>
        <P>{t(DICTIONARY_KEYS.LOGIN_FORM_OR)}</P>
        <Link route={REGISTER} params={{ lang }} passHref>
          <RegisterLink>
            {t(DICTIONARY_KEYS.LOGIN_FORM_REGISTER_LINK)}
          </RegisterLink>
        </Link>
      </ButtonWrapper>
    </Row>
  </form>
);

LoginFormView.propTypes = {
  globalErrors: PropTypes.array.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  translator: PropTypes.func.isRequired
};

export { LoginFormView };
