const authResolver = require("./auth");
const wordResolver = require("./word");
const scoreResolver = require("./score");

const rootResolver = {
  ...authResolver,
  ...wordResolver,
  ...scoreResolver
}

module.exports = rootResolver;