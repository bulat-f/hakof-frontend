const TITLE_PRFIX = "Hakof";

export const getPageTitle = (title: string): string =>
  [TITLE_PRFIX, title].filter((el) => el).join(" | ");
