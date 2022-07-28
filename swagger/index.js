const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");

const serverUrl = `https:${process.env.SERVER_IP}:${process.env.PORT}`;

const options = {
  swaggerDefinition: {
    info: {
      title: "PLZ",
      version: "1.0.0",
      description: "PLZ SWAGGER",
    },
    servers: [
      {
        url: serverUrl,
      },
    ],
  },
  apis: [
    "./controllers/User/*.js", //
    "./controllers/Product/*.js",
    "./swagger/*",
  ],
};

const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
