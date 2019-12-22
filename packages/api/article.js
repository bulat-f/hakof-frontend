import { getRequest } from "./basic";
const comments = [
  {
    id: "f0fda58630310a6dd91a7d8f0a4ceda2",
    comment:
      "Cool writing. Have read it many-many times. Will do it again. Totally wourth it",
    author: {
      id: "8743b52063cd84097a65d1633f5c74f5",
      name: "James",
      avatar: null
    },
    likes: {
      count: 108,
      isLiked: true
    },
    dislikes: {
      count: 3
    },
    replies: [
      {
        id: "b31d032cfdcf47a399990a71e43c5d2a",
        comment: "Agree on 100%",
        author: {
          id: "01dfae6e5d4d90d9892622325959afbe",
          name: "Cool Guy",
          avator: null
        },
        likes: {
          count: 12
        },
        dislikes: {
          count: 0
        }
      }
    ]
  }
];

export const getArticles = async lang => {
  const articles = await getRequest(`articles?lang=${lang}`);

  const featured = articles.find(({ featured }) => featured);
  const latest = articles.filter(
    ({ selected, featured }) => !selected && !featured
  );
  const selected = articles.filter(({ selected }) => selected);
  return {
    featured,
    latest,
    selected
  };
};

export const getArticle = async slug => {
  const article = await getRequest(`articles/${slug}`);

  return {
    ...article,
    comments
  };
};

export const postComment = (slug, comment) => {
  const commentTemplate = {
    id: "f0fda58630310a6dd91a7d8f0a4cedb3",
    likes: { count: 0 },
    dislikes: { count: 0 },
    replies: []
  };

  return Promise.resolve({ ...commentTemplate, ...comment });
};
