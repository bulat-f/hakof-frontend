import { compose } from "recompose";

import { withLang } from "../../enhancers/withLang";
import { withTranslator } from '../../enhancers/withTranslator';

import { LoginView } from "./LoginView";

export const LoginContainer = compose(
  withLang,
  withTranslator
)(LoginView);
