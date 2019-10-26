import { useContext } from "react";
import { withProps } from "recompose";
import { LanguageContext } from "../contexts/LanguageContext";

export const withLang = withProps(() => {
  const lang = useContext(LanguageContext);

  return { lang };
});
