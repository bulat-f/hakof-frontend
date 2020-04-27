import { request } from "./base";

const ARTICLES_RESOURCE_URL = "/articles";

export const getArticles = async (lang) => {
  const params = new URLSearchParams({ lang });
  const articles = await request({ url: ARTICLES_RESOURCE_URL, params });

  const featured = articles.find(({ featured }) => featured);
  const latest = articles.filter(
    ({ selected, featured }) => !selected && !featured
  );
  const selected = articles.filter(({ selected }) => selected);
  return {
    featured,
    latest,
    selected,
  };
};

export const getArticle = (slug) => request(`${ARTICLES_RESOURCE_URL}/${slug}`);
