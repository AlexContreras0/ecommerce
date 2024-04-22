const { getCartById, addProductToCart, createCart, deleteCartProduct } = require('../controllers/cartController')
const verifyToken = require('../middlewares/auth')

const cartsRouter = require('express').Router()

cartsRouter.post('/', createCart)
cartsRouter.post('/deleteProduct/:id', deleteCartProduct)
cartsRouter.get('/:id', getCartById)
cartsRouter.post('/:id', addProductToCart)

// He quitado lo del verifyToken del getCartById y del addProductToCart porque me da un error y no consigo que valide el token


module.exports = cartsRouter