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
  const currentArticle = articles.find(
    ({ slug: currentSlug }) => currentSlug === slug
  );

  return {
    ...currentArticle,
    comments,
    body: `ГТРК ТатарстанГТРК Татарстан
  В Татарстане сократят посевы свеклы из-за перепроизводства сахара
  Из-за падения цен на сахар в Татарстане решили меньше сажать меньше свеклы
  КП - Казань
  В России ситуация с сахарным песком очень сложная: министр Татарии
  REGNUM
  4 фото1 видео
  Весеннее настроение испортила массовая гибель озимых на полях. А уборочная страда, с одной стороны, порадовала хорошим урожаем зерна, картофеля и других овощей, а также сахарной свеклы. А с другой, это тот случай, когда «больше- не лучше».`
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
