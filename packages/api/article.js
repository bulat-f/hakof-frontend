import { getRequest, postRequest } from "./basic";

export const getArticles = async (lang) => {
  const articles = await getRequest(`articles?lang=${lang}`);

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

export const getArticle = (slug) => getRequest(`articles/${slug}`);

export const postComment = ({ article_id, reply_to_id = null, comment }) =>
  postRequest("comments", localStorage.getItem("jwt"), {
    article_id,
    reply_to_id,
    comment,
  });
