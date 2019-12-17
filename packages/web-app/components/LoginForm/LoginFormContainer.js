import { connect } from "react-redux";
import { compose, withProps, withStateHandlers, withHandlers } from "recompose";
import { useFormik } from "formik";
import * as Yup from "yup";

import { login } from "@hakof/api";

import { setCurrentUser } from "../../modules/user";

import { Router } from "../../routes";
import { HOME } from "../../constants/pages";

import { withTranslator } from "../../enhancers/withTranslator";

import { LoginFormView } from "./LoginFormView";

const initialValues = { email: "", password: "" };
const validationSchema = Yup.object({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6)
    .required()
});

const mapDispatchToProps = { setCurrentUser };

export const LoginFormContainer = compose(
  withTranslator,
  connect(null, mapDispatchToProps),
  withStateHandlers(
    { globalErrors: [] },
    { setErrors: () => globalErrors => ({ globalErrors }) }
  ),
  withHandlers({
    onSubmit: ({ setErrors, setCurrentUser, lang }) => async values => {
      setErrors();
      try {
        const response = await login(values);
        setCurrentUser(response);
        Router.pushRoute(HOME, { lang });
      } catch {
        setErrors(["Unauth"]);
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
)(LoginFormView);
