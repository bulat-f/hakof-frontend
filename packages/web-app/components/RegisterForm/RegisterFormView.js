import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Row, Col, Input, Button, Alert } from "@hakof/ui";

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

const RegisterFormView = ({
  globalErrors,
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  translator: t
}) => (
  <form onSubmit={handleSubmit}>
    {globalErrors.length > 0 && (
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
          type="text"
          name="first_name"
          label={t(DICTIONARY_KEYS.FIELD_FIRST_NAME)}
          value={values.first_name}
          error={errors.first_name}
          touched={touched.first_name}
          onChange={handleChange}
        />
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <Input
          type="text"
          name="last_name"
          label={t(DICTIONARY_KEYS.FIELD_LAST_NAME)}
          value={values.last_name}
          error={errors.last_name}
          touched={touched.last_name}
          onChange={handleChange}
        />
      </Col>
    </Row>
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
      <Col md={12}>
        <Input
          type="password"
          name="password_confirmation"
          label={t(DICTIONARY_KEYS.FIELD_PASSWORD_CONFIRMATION)}
          value={values.password_confirmation}
          error={errors.password_confirmation}
          touched={touched.password_confirmation}
          onChange={handleChange}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <Button type="submit">{t(DICTIONARY_KEYS.REGISTER_FORM_SUMIT)}</Button>
      </Col>
    </Row>
  </form>
);

RegisterFormView.propTypes = {
  globalErrors: PropTypes.array.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  translator: PropTypes.func.isRequired
};

export { RegisterFormView };
