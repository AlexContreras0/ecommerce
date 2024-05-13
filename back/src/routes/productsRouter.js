const { getProducts, createProduct, getProductById, updateProduct, deleteProduct, loadData } = require('../controllers/productController')

const productsRouter = require('express').Router()

productsRouter.get('/', getProducts)
productsRouter.post('/', createProduct)
productsRouter.get('/loadData', loadData)
productsRouter.get('/:id', getProductById)
productsRouter.put('/:id', updateProduct)
productsRouter.put('/:id', deleteProduct)

module.exports = productsRouter