const routes = require("next-routes");
const PAGES = require("./constants/pages");

const languagePattern = ":lang";

module.exports = routes()
  .add("/", "home")
  .add(PAGES.HOME, `/${languagePattern}`, "home");
