const mode = process.env.CONTEXT === "production" ? "prod" : "dev";
const configFile = `./config/nuxt.${mode}.js`;

module.exports = require(configFile);
