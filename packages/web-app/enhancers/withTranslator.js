import { compose, withHandlers } from "recompose";

import DICTIONARIES from "../dictionaries";
import { withLang } from "./withLang";

export const withTranslator = compose(
  withLang,
  withHandlers({
    translator: ({ lang }) => key => {
      console.log(lang, key, DICTIONARIES[lang][key]);
      
      return DICTIONARIES[lang][key];
    }
  })
);
