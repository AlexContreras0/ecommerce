const productsDB = require("../initialData/productsDB")
const productModel = require("../models/productModel")

const getProducts = async (req, res) => {

    try {

        const allProducts = await productModel.find()
        const resProduct = allProducts.map(product => {
            return {
                id: product.id,
                nombre: product.productName,
                precio: product.productPrice,
                tipo: product.productCategory,
                stock: product.productStock,
                rating: product.productRating,
                descripcion: product.productDescription,
                imagen: product.productImage
            }
        })
        res.status(200).json({
            status: 'succeeded',
            data: resProduct,
            error: null
        })

    } catch (error) {
        res
            .status(500)
            .json({ status: "failed", data: null, error: error.message })
    }

}

const getProductById = async (req, res) => {

    try {

        const id = req.params.id
        const product = await productModel.findById(id)
        res.status(200).json({
            status: 'succeeded',
            data: product,
            error: null
        })

    } catch (error) {
        res
            .status(500)
            .json({ status: "failed", data: null, error: error.message })
    }
}

const createProduct = async (req, res) => {

    try {

        const productData = req.body
        const newProduct = await productModel({
            nombre: productData.productName,
            precio: productData.productPrice,
            tipo: productData.productCategory,
            stock: productData.productStock,
            rating: productData.productRating,
            descripcion: productData.productDescription,
            imagen: productData.productImage
        })
        await newProduct.save()
        console.log(newProduct)
        res.status(200).json({
            status: 'succeeded',
            data: newProduct,
            error: null
        })

    } catch (error) {
        res
            .status(500)
            .json({ status: "failed", data: null, error: error.message })
    }
}

const updateProduct = async (req, res) => {

    try {
        const id = req.params.id
        const { productName, productPrice, productDescription, productImage, productCategory, productStock, productRating } = req.body

        const productAux = await productModel.findById(id)

        if (!productAux) return res.status(404).send('El producto no existe')

        if (productName) {
            productAux.productName = productName
        }
        if (productPrice) {
            productAux.productPrice = productPrice
        }
        if (productDescription) {
            productAux.productDescription = productDescription
        }
        if (productImage) {
            productAux.productImage = productImage
        }
        if (productCategory) {
            productAux.productCategory = productCategory
        }
        if (productStock) {
            productAux.productStock = productStock
        }
        if (productRating) {
            productAux.productRating = productRating
        }

        await productAux.save()

        res.status(200).json({
            status: 'succeeded',
            data: null,
            error: null
        })
    } catch (error) {
        res
            .status(500)
            .json({ status: "failed", data: null, error: error.message })
    }

}

const deleteProduct = async (req, res) => {

    try {

        const id = req.params.id
        await productModel.findByIdAndDelete(id)
        res.status(200).json({
            status: 'succeeded',
            data: null,
            error: null
        })

    } catch (error) {
        res
            .status(500)
            .json({ status: "failed", data: null, error: error.message })
    }
}

const loadData = async (req, res) => {

    try {

        productsDB.map(async (product) => {
            const newProduct = productModel({
                idSupplier: product.idSupplier,
                productName: product.nombre,
                productPrice: product.precio,
                productDescription: product.description,
                productImage: product.imagen,
                productCategory: product.category,
                productStock: product.stock,
                productRating: product.rating
            })
            await newProduct.save()
        })

        res.sendStatus(200)

    } catch (error) {
        console.log(error)
    }
}

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct, loadData, }
