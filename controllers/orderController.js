const Order = require("../models/orderModel");

exports.getOrder = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById();
    res.jsonp(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createOrder = async (req, res) => {
  const { productName, price, quantity } = req.body;
  try {
    const newOrder = await Order.create({ productName, price, quantity });
    res.status(201).json({
      success: true,
      order:newOrder
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

