const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  orderProducts: [
    {
      productId: {
        type: String,
        required: true,
      },
    
      orderQuantityProduct: {
        type: Number,
        required: true,
      },

      orderPriceProduct: {
        type: Number,
        required: true,
      },
    }
  ],
  orderStatus: {
    type: String,
    required: true,
    enum: ["pending", "completed"],
  },
  orderDate: {
    type: Date,
    required: true,
  },
  orderPrice: {
    type: Number,
    required: true,
  },
});

const order = mongoose.model("Order", orderSchema, "Order");

module.exports = order;