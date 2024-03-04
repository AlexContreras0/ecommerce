const cartModel = require("../models/cartModel");
const productModel = require("../models/productModel");

const getCartById = async (req, res) => {
  try {
    const userId = req.params.id;
    const cart = await cartModel.findById(userId);
    res.status(200).json({
      status: "succeeded",
      data: cart,
      error: null,
    });
  } catch (error) {
    res.status(500).json({ status: failed, data: null, error: error.message });
  }
};

const addProductToCart = async (req, res) => {
  try {
    const userIdCart = req.params.id;
    const { productId, cartProductQuantity } = req.body;
    const cart = await cartModel.findById(userIdCart);
    if (!cart) {
      try {
        const initialTotalPrice = productId * cartProductQuantity;
        const newCart = await cartModel({
          userId: userIdCart,
          cartProducts: [{productId: productId, cartProductQuantity: cartProductQuantity}],
          cartTotalPrice: initialTotalPrice,
          cartDate: Date(),
          cartStatus: "pending",
        });
        await cart.save();
        res.status(200).json({
          status: "succeded",
          data: null,
          error: null,
        });
      } catch (error) {
        res
          .status(500)
          .json({ status: "failed", data: null, error: error.message });
      }
    }
    if (!productId && !cartProductQuantity) {
      cart.cartProducts.push({ productId, cartProductQuantity });
    }
    const totalPrice = 0;
    const newTotalPrice = cart.cartProducts.map(async (productCart) => {
      const product = await productModel.findById(productCart.productId);
      totalPrice = totalPrice + product.productId * product.cartProductQuantity;
      return totalPrice;
    });

    cart.cartTotalPrice = newTotalPrice;
    await cart.save();
    res.status(200).json({
      status: "succeded",
      data: null,
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

module.exports = { getCartById, addProductToCart };