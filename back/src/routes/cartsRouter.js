const { getCartById, addProductToCart } = require('../controllers/cartController')

const cartsRouter = require('express').Router()

cartsRouter.get('/:id', getCartById)
cartsRouter.post('/:id', addProductToCart)

module.exports = cartsRouter