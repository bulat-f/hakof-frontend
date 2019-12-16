import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { compose } from "recompose";

import { Row, Col, Input, Button } from "@hakof/common";
import { createUser } from "@hakof/api";

import { setCurrentUser } from "../../modules/user";

import { Router } from "../../routes";
import { HOME } from "../../constants/pages";

import { withTranslator } from "../../enhancers/withTranslator";
import * as DICTIONARY_KEYS from "../../dictionaries/keys";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password_confirmation: ""
};

const validationSchema = Yup.object({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6)
    .required(),
  password_confirmation: Yup.string()
    .min(6)
    .required()
});

const RegisterFormView = ({ translator: t, lang, setCurrentUser }) => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        const response = await createUser(values);
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
          <Button type="submit">
            {t(DICTIONARY_KEYS.REGISTER_FORM_SUMIT)}
          </Button>
        </Col>
      </Row>
    </form>
  );
};

RegisterFormView.propTypes = {
  translator: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  setCurrentUser: PropTypes.func.isRequired
};

const mapDispatchToProps = { setCurrentUser };

const RegisterFormContainer = compose(
  withTranslator,
  connect(null, mapDispatchToProps)
)(RegisterFormView);

export { RegisterFormContainer as RegisterForm };
