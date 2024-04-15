const cartModel = require("../models/cartModel");
const productModel = require("../models/productModel");

const getCartById = async (req, res) => {
  try {
    console.log(req.params.id, "este es el userId del back en el getCartbyId");
    let cart = await cartModel.findOne({ userId: req.params.id });
    console.log(cart, "este es el cart despues de buscar por userId getCartbyId");
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
    let productExist = false;
    let totalPrice = 0;


    const waitingForeach = async () => {
      
      const productCartExistcart = cart.cartProducts.find((product) => product.productId == idProduct)
        if (productCartExistcart !== undefined) {
          productExist = true;
        }

    };


    const calculateTotal = async () => {      
      if (productExist) {
        cart.cartProducts.forEach(async (product) => {
          const productUpdatePrice = await productModel.findById(product.productId);
       
            if (product.productId == idProduct) {
              totalPrice =
                totalPrice +
                (product.cartProductQuantity + quantity) *
                  productUpdatePrice.productPrice;
              product.cartProductQuantity =
                product.cartProductQuantity + quantity;
            } else {
              totalPrice =
                totalPrice +
                product.cartProductQuantity * productUpdatePrice.productPrice;
            }
          });          
      } else {
        cart.cartProducts.push({
          productId: idProduct,
          cartProductQuantity: quantity,
        });
        cart.cartProducts.forEach(async (product) => {
          const productUpdatePrice = await productModel.findById(product.productId);
              totalPrice =
                totalPrice +
                (product.cartProductQuantity) *
                  productUpdatePrice.productPrice;         
          });
      }
    };

    const waitingForSave = async () => {
      cart.cartTotalPrice = totalPrice;
      await cart.save()
      res.status(200).json({
        status: "succeded",
        data: cart,
        error: null,
      });
    };

    async function executionProcess(waitingForeach, calculateTotal, waitingForSave){
      await waitingForeach();
      await calculateTotal()
      setTimeout(() => {
        waitingForSave();
      }, 1000);
    }
    executionProcess(waitingForeach, calculateTotal, waitingForSave)

  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

module.exports = { getCartById, addProductToCart, createCart };
