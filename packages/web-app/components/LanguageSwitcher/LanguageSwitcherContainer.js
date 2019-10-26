import React, { useContext } from "react";
import { useRouter } from "next/router";

import { LanguageContext } from "../../contexts/LanguageContext";
import { LanguageSwitcherView } from "./LanguageSwitcherView";

export const LanguageSwitcherContainer = () => {
  const currentLanguage = useContext(LanguageContext);
  const router = useRouter();

  const pathname = router.pathname.replace("/", "");
  const params = router.query;

  return (
    <LanguageSwitcherView
      pathname={pathname}
      params={params}
      currentLanguage={currentLanguage}
    />
  );
};
