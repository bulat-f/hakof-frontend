import { compose } from "recompose";

import { withLang } from "../../enhancers/withLang";
import { withTranslator } from '../../enhancers/withTranslator';

import RegisterView from "./RegisterView";

export default compose(
  withLang,
  withTranslator
)(RegisterView);
