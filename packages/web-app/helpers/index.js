const TITLE_PRFIX = "Hakof";

export const getPageTitle = title =>
  [TITLE_PRFIX, title].filter(el => el).join(" | ");
