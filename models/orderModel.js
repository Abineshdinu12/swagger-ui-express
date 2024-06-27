const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  productName: {
    type: String,
    unique: true,
  },
  price: {
    type: Number,
    unique: true,
  },
  quantity: {
    type: Number,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
