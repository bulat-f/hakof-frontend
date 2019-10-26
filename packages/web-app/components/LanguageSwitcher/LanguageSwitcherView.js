import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { P } from "@hakof/common";

import { Link } from "../../routes";

import { RU, TT, LANGUAGE_NAMES } from "../../constants/languages";

const LangIcon = styled.img`
  border-radius: 2px;
  height: 20px;
  margin-right: 8px;
  box-shadow: 0 0 6px 3px #eee;
`;

const TatIcon = styled(LangIcon).attrs({
  src: "/static/icons/tatar.svg"
})``;

const RusIcon = styled(LangIcon).attrs({
  src: "/static/icons/russian.svg"
})``;

const LangWrapper = styled.a`
  padding: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const getReverseLang = currentLanguage => (currentLanguage === TT ? RU : TT);

export const LanguageSwitcherView = ({ pathname, params, currentLanguage }) => (
  <Link
    route={pathname}
    params={{ ...params, lang: getReverseLang(currentLanguage) }}
  >
    <LangWrapper>
      {currentLanguage === RU ? <TatIcon /> : <RusIcon />}
      <P>{LANGUAGE_NAMES[getReverseLang(currentLanguage)]}</P>
    </LangWrapper>
  </Link>
);

LanguageSwitcherView.propyTypes = {
  pathname: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
  currentLanguage: PropTypes.string.isRequired
};
