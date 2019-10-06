const routes = require("next-routes")();
const PAGES = require("./constants/pages");

const localePattern = ":locale([a-z]{2})";

routes.add(PAGES.HOME, "/", "home").add(`/${localePattern}`, "home");
