import { connect } from "react-redux";
import { compose } from "recompose";
import { withFormik } from "formik";
import * as Yup from "yup";

import { register } from "../../modules/user";

import { withTranslator } from "../../enhancers/withTranslator";

import { RegisterFormView } from "./RegisterFormView";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const validationSchema = Yup.object({
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  password_confirmation: Yup.string().min(6).required(),
});

const mapDispatchToProps = { register };

export const RegisterFormContainer = compose(
  withTranslator,
  connect(null, mapDispatchToProps),
  withFormik({
    displayName: "REGISTER_FORM",
    mapPropsToValues: () => initialValues,
    validationSchema,
    handleSubmit: (values, { props: { register } }) => {
      register(values);
    },
  })
)(RegisterFormView);
