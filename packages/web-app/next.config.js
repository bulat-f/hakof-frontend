const withTM = require("next-transpile-modules");

module.exports = withTM({
  transpileModules: ["@hakof/api", "@hakof/common"]
});
