const articles = [13, 15, 0, 1, 3, 5, 6, 7, 8, 9, 11, 17].map(index => ({
  description: `Description of artible ${index + 1}`,
  id: index + 1,
  source_href: "https://republic.ru",
  source_title: "Republic",
  title:
    index === 17
      ? "Title of featured article. We should test it on all kind of backgrounds"
      : `Title of article ${index + 1}`,
  cover: index % 2 ? `/static/images/image-${index}.jpg` : null,
  selected: index % 2 !== 0 && index < 6,
  featured: index === 17
}));

export const getArticles = () => Promise.resolve(articles);
