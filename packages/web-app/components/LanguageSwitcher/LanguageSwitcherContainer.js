import React, { useContext } from "react";
import { useRouter } from "next/router";

import { LanguageContext } from "../../contexts/LanguageContext";
import { LanguageSwitcherView } from "./LanguageSwitcherView";

import { HOME } from '../../constants/pages'

export const LanguageSwitcherContainer = () => {
  const currentLanguage = useContext(LanguageContext);
  const router = useRouter();

  const params = router.query;

  return (
    <LanguageSwitcherView
      pathname={HOME}
      params={params}
      currentLanguage={currentLanguage}
    />
  );
};
