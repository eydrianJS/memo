const authResolver = require("./auth");
const wordResolver = require("./word");

const rootResolver = {
  ...authResolver,
  ...wordResolver
}

module.exports = rootResolver;