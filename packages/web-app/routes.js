const routes = require("next-routes");
const PAGES = require("./constants/pages");

const languagePattern = ":lang(ru|tt)";

module.exports = routes()
  .add("/", "home")
  .add(PAGES.HOME, `/${languagePattern}`, "home")

  .add(PAGES.ARTICLE, `/${languagePattern}/article/:slug`, "article")
  
  .add(PAGES.LOGIN, `/${languagePattern}/login`, "login");
