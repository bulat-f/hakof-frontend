const buildArticles = lang =>
  [13, 15, 0, 1, 3, 5, 6, 7, 8, 9, 11, 17].map(index => ({
    description: `Description of artible ${index + 1}`,
    id: index + 1,
    source_href: "https://republic.ru",
    source_title: "Republic",
    slug: `article_${index + 1}`,
    title:
      index === 17
        ? `Title of featured article. We should test it on all kind of backgrounds [${lang.toUpperCase()}]`
        : `Title of article ${index + 1} [${lang.toUpperCase()}]`,
    cover: index % 2 ? `/static/images/image-${index}.jpg` : null,
    selected: index % 2 !== 0 && index < 6,
    featured: index === 17
  }));

export const getArticles = lang => {
  const articles = buildArticles(lang);

  const featured = articles.find(({ featured }) => featured);
  const latest = articles.filter(({ selected }) => !selected);
  const selected = articles.filter(({ selected }) => selected);
  return Promise.resolve({
    featured,
    latest,
    selected
  });
};

export const getArticle = (slug, lang = "ru") => {
  const articles = buildArticles(lang);

  return articles.find(({ slug: currentSlug }) => currentSlug === slug);
};
