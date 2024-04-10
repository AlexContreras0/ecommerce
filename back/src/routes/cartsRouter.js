const { getCartById, addProductToCart, createCart } = require('../controllers/cartController')

const cartsRouter = require('express').Router()

cartsRouter.post('/', createCart)
cartsRouter.get('/:id', getCartById)
cartsRouter.post('/:id', addProductToCart)

module.exports = cartsRouter