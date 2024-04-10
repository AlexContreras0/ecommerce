const cartModel = require("../models/cartModel");
const productModel = require("../models/productModel");

const getCartById = async (req, res) => {
  try {
    console.log(req.params.id, "este es el userId del back")
    let cart = await cartModel.findOne({userId: req.params.id});
    console.log(cart, "este es el cart despues de buscar por userId")
    if (cart){
    res.status(200).json({
      status: "succeeded",
      data: cart,
      error: null,
    })} else {
      res.status(500).json({ status: "failed", data: null, error: error.message });
    }
  } catch (error) {
    res.status(500).json({ status: "failed", data: null, error: error.message });
  }
};

const createCart = async(req, res) => {
  try {
  let initialTotalPrice = 0
  const { idUser, idProduct, quantity } = req.body
  const product = await productModel.findById(idProduct)
  initialTotalPrice = (product.productPrice * quantity)
  const newCart = await cartModel({
    userId: idUser,
    cartProducts: [{productId: idProduct, cartProductQuantity: quantity}],
          cartTotalPrice: initialTotalPrice,
          cartDate: Date(),
          cartStatus: "pending",
  })
  await newCart.save();
  res.status(200).json({
    status: "succeded",
    data: newCart,
    error: null,
  });
} catch (error) {
  res
    .status(500)
    .json({ status: "failed", data: null, error: error.message });
}

}

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

module.exports = { getCartById, addProductToCart, createCart };