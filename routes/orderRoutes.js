const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/order", orderController.getOrder);

router.get("/order/:id", orderController.getOrderById);

router.post("/new", orderController.createOrder);

module.exports = router;
