const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  cartProducts: [
    {
      productId: {
        type: String,
        required: true,
      },
      cartProductQuantity: {
        type: Number,
        required: true,
      }
    },
  ],
  cartTotalPrice: {
    type: Number,
    required: true,
  },
  cartDate: {
    type: Date,
    required: true,
  },
  cartStatus: {
    type: String,
    required: true,
    enum: ["pending", "completed"],
    default: "pending"
  },
});

const cart = mongoose.model("Cart", cartSchema, "Cart");

module.exports = cart;
