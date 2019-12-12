import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { compose } from "recompose";

import { Row, Col, Input, Button } from "@hakof/common";
import { login } from "@hakof/api";

import { setCurrentUser } from "../../modules/user";

import { Router } from "../../routes";
import { HOME } from "../../constants/pages";

import { withTranslator } from "../../enhancers/withTranslator";
import * as DICTIONARY_KEYS from "../../dictionaries/keys";

const initialValues = { email: "", password: "" };
const validationSchema = Yup.object({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6)
    .required()
});

const LoginFormView = ({ translator: t, lang, setCurrentUser }) => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        const response = await login(values);
        setCurrentUser(response);
        Router.pushRoute(HOME, { lang });
      } catch (error) {
        const err = await error;
        console.log("ERROR", err);
      }
    }
  });

  return (
    <form onSubmit={handleSubmit}>
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
        <Col>
          <Button type="submit">{t(DICTIONARY_KEYS.LOGIN_FORM_SUBMIT)}</Button>
        </Col>
      </Row>
    </form>
  );
};

LoginFormView.propTypes = {
  translator: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  setCurrentUser: PropTypes.func.isRequired
};

const mapDispatchToProps = { setCurrentUser };

const LoginFormContainer = compose(
  withTranslator,
  connect(null, mapDispatchToProps)
)(LoginFormView);

export { LoginFormContainer as LoginForm };
