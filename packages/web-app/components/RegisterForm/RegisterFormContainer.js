import { connect } from "react-redux";
import { compose, withStateHandlers, withHandlers, withProps } from "recompose";
import { useFormik } from "formik";
import * as Yup from "yup";

import { createUser } from "@hakof/api";

import { setCurrentUser } from "../../modules/user";

import { Router } from "../../routes";
import { HOME } from "../../constants/pages";

import { withTranslator } from "../../enhancers/withTranslator";

import { RegisterFormView } from "./RegisterFormView";

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

const mapDispatchToProps = { setCurrentUser };

export const RegisterFormContainer = compose(
  withTranslator,
  connect(null, mapDispatchToProps),
  withStateHandlers(
    { globalErrors: [] },
    {
      setErrors: () => globalErrors => ({ globalErrors })
    }
  ),
  withHandlers({
    onSubmit: ({ setErrors, setCurrentUser, lang }) => async values => {
      setErrors([]);
      try {
        const response = await createUser(values);
        setCurrentUser(response);
        Router.pushRoute(HOME, { lang });
      } catch (response) {
        const { errors } = await response;
        setErrors(errors);
      }
    }
  }),
  withProps(({ onSubmit }) =>
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit
    })
  )
)(RegisterFormView);
