const cartModel = require("../models/cartModel");
const productModel = require("../models/productModel");

const getCartById = async (req, res) => {
  try {
    console.log(req.params.id, "este es el userId del back");
    let cart = await cartModel.findOne({ userId: req.params.id });
    console.log(cart, "este es el cart despues de buscar por userId");
    if (cart) {
      res.status(200).json({
        status: "succeeded",
        data: cart,
        error: null,
      });
    } else {
      res
        .status(500)
        .json({ status: "failed", data: null, error: error.message });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

const createCart = async (req, res) => {
  try {
    let initialTotalPrice = 0;
    const { idUser, idProduct, quantity } = req.body;
    const product = await productModel.findById(idProduct);
    initialTotalPrice = product.productPrice * quantity;
    const newCart = await cartModel({
      userId: idUser,
      cartProducts: [{ productId: idProduct, cartProductQuantity: quantity }],
      cartTotalPrice: initialTotalPrice,
      cartDate: Date(),
      cartStatus: "pending",
    });
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
};

const addProductToCart = async (req, res) => {
  try {
    const userIdCart = req.params.id;
    const { idUser, idProduct, quantity } = req.body;
    let cart = await cartModel.findOne({ userId: req.params.id });

    if (!cart) return res.status(404).send("Carrito no existe");
    let productExist = false    
    let totalPrice = 0

    console.log(productExist, "productexist")

    const calculateTotal = async() =>{
    if (idProduct && quantity) {
      cart.cartProducts.forEach(async(product) => {
        const productUpdatePrice = await productModel.findById(product.productId);
        if (productUpdatePrice) {
          totalPrice = totalPrice + (product.cartProductQuantity * productUpdatePrice.productPrice)
        }

        if(idProduct == product.productId) {
          console.log("está entrando por aquí??")
          productExist = true
          // product.cartProductQuantity = quantity + product.cartProductQuantity
          // totalPrice = totalPrice + (quantity * productUpdatePrice.productPrice)
        }
        cart.cartTotalPrice = totalPrice
      });      
    }

  }; 
  await calculateTotal()

  console.log(productExist, "productexist")

  const waitingForeach = async() =>{
    cart.cartProducts.forEach(async(product) => {
      if (product.productId == idProduct) {        
        productExist = true
      }
    }); }
    await waitingForeach()

    console.log(productExist, "productexist")

    if (productExist == false){
      console.log("ha entrado por aquí porque el producto no existe supuestamente")
      console.log(productExist, "productexist dentro del if")
       cart.cartProducts.push({ productId: idProduct, cartProductQuantity: quantity });
       const productUpdatePrice = await productModel.findById(idProduct);
       totalPrice = totalPrice + (quantity * productUpdatePrice.productPrice)
       cart.cartTotalPrice = totalPrice
    }
    
    console.log(
      cart,
      "Este es el carrito del cartController con el producto nuevo añadido"
    );
  
    await cart.save();
    res.status(200).json({
      status: "succeded",
      data: cart,
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

module.exports = { getCartById, addProductToCart, createCart };
