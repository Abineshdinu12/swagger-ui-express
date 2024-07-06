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
const company = loadYaml("./swaggerYaml/company.yaml");
const frontDesk = loadYaml("./swaggerYaml/frontDesk.yaml");
const timeFrame = loadYaml("./swaggerYaml/timeFrame.yaml");
const rightHip = loadYaml("./swaggerYaml/rightHip.yaml");
const leftHip = loadYaml("./swaggerYaml/leftHip.yaml");
const rightKnee = loadYaml("./swaggerYaml/rightKnee.yaml");
const leftKnee = loadYaml("./swaggerYaml/leftKnee.yaml");
const rightLeg = loadYaml("./swaggerYaml/rightLeg.yaml");
const leftLeg = loadYaml("./swaggerYaml/leftLeg.yaml");

module.exports = {
  products,
  orders,
  services,
  location,
  company,
  frontDesk,
  timeFrame,
  rightHip,
  leftHip,
  rightKnee,
  leftKnee,
  rightLeg,
  leftLeg,
  swaggerUi,
};
