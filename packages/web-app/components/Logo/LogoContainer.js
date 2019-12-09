import { compose } from "recompose";
import { withLang } from "../../enhancers/withLang";

import { LogoView } from "./LogoView";

import { RU, TT } from "../../constants/languages";

export const LogoContainer = compose(
  withLang,
)(LogoView);
