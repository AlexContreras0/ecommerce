const { getCartById, addProductToCart, createCart, deleteCartProduct } = require('../controllers/cartController')

const cartsRouter = require('express').Router()

cartsRouter.post('/', createCart)
cartsRouter.post('/deleteProduct/:id', deleteCartProduct)
cartsRouter.get('/:id', getCartById)
cartsRouter.post('/:id', addProductToCart)


module.exports = cartsRouter