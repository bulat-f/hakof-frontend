import { connect } from "react-redux";
import { compose } from "recompose";
import { withFormik } from "formik";
import * as Yup from "yup";

import { login } from "../../modules/user";

import { withTranslator } from "../../enhancers/withTranslator";

import { LoginFormView } from "./LoginFormView";

const initialValues = { email: "", password: "" };
const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

const mapDispatchToProps = { login };

export const LoginFormContainer = compose(
  withTranslator,
  connect(null, mapDispatchToProps),
  withFormik({
    displayName: "LOGIN_FORM",
    mapPropsToValues: () => initialValues,
    validationSchema,
    handleSubmit: (values, { props: { login } }) => {
      login(values);
    },
  })
)(LoginFormView);
