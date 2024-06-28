const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");
const fs = require("fs");
const yaml = require("js-yaml");

const loadYaml = (filePath) => {
  return yaml.load(fs.readFileSync(path.join(__dirname, filePath), "utf8"));
};

const products = loadYaml("./swaggerYaml/products.yaml");
const orders = loadYaml("./swaggerYaml/order.yaml");
const services = loadYaml("./swaggerYaml/service.yaml");
const location = loadYaml("./swaggerYaml/location.yaml");
const company = loadYaml("./swaggerYaml/company.yaml")
const frontdesk = loadYaml("./swaggerYaml/frontDesk.yaml")
module.exports = {
  products,
  orders,
  services,
  location,
  company,
  frontdesk,
  swaggerUi,
};
