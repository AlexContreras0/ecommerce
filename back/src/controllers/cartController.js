const cartModel = require("../models/cartModel");
const productModel = require("../models/productModel");

const getCartById = async (req, res) => {
  try {
    
    let cart = await cartModel.findOne({ userId: req.params.id });

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

    const findProductCart = async () => {
      const productCartExistcart = cart.cartProducts.find(
        (product) => product.productId == idProduct
      );
      if (productCartExistcart !== undefined) {
        productExist = true;
      }
    };

    const addProductAndTotal = async () => {
      if (productExist) {
         const updatePromises = cart.cartProducts.map(async (product) => {
           const productUpdatePrice = await productModel.findById(product.productId);
           if (product.productId == idProduct) {
             totalPrice += (product.cartProductQuantity + quantity) * productUpdatePrice.productPrice;
             product.cartProductQuantity += quantity;
           } else {
             totalPrice += product.cartProductQuantity * productUpdatePrice.productPrice;
           }
         });
         await Promise.all(updatePromises);
      } else {
         cart.cartProducts.push({
           productId: idProduct,
           cartProductQuantity: quantity,
         });
         const updatePromises = cart.cartProducts.map(async (product) => {
           const productUpdatePrice = await productModel.findById(product.productId);
           totalPrice += product.cartProductQuantity * productUpdatePrice.productPrice;
         });
         await Promise.all(updatePromises);
      }
     };

    const SaveCart = async (result) => {
      cart.cartTotalPrice = totalPrice;
      await cart.save();
      res.status(200).json({
        status: "succeded",
        data: cart,
        error: null,
      });
    };

    async function executionProcess() {
      try {
         await findProductCart(); // Asegúrate de que findProductCart actualiza correctamente productExist y totalPrice
         await addProductAndTotal(); // Asegúrate de que addProductAndTotal actualiza correctamente totalPrice
         await SaveCart(); // Asegúrate de que SaveCart guarda el carrito con el precio total correcto
      } catch (error) {
         console.log(error);
      }
     }

    executionProcess();

  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

const deleteCartProduct = async (req, res) => {
try {
  const idCart = req.params.id
  const { idProduct } = req.body
  const cart = await cartModel.findById(idCart)

  const buildingNewArray = async () => {
  let totalPrice = 0;
  const cartProductAux = []
  const productCartDeleted = cart.cartProducts.map(async (product) => {
    if (product.productId != idProduct){
      cartProductAux.push(product)
      const productUpdatePrice = await productModel.findById(product.productId);
      totalPrice += product.cartProductQuantity * productUpdatePrice.productPrice;
    }
  });
  await Promise.all(productCartDeleted);
  cart.cartProducts = cartProductAux
  cart.cartTotalPrice = totalPrice;
}


const SaveCart = async (result) => {
  
    await cart.save()

  res.status(200).json({
    status:'succeeded',
    data: null,
    error: null
  })
}

async function executionProcess(){
  try {

    await buildingNewArray()
    await SaveCart()
    
  } catch (error) {
    console.log(error)
  }

}

executionProcess()
  
} catch (error) {
  
  res.status(500)
  .json({ status: "failed", data: null, error: error.message})
}

}

module.exports = { getCartById, addProductToCart, createCart, deleteCartProduct };
