const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({

    idSupplier: {
        type: Number,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true,
        min: [0, "El valor no puede ser inferior a 0"]
    },
    productDescription: {
        type: String,
        required: true
    },
    productImage: [{
        type: String,
        required: true
    }],
    productCategory: {
        type: String,
        required: true,
        enum: ['aceite', 'verdura', 'embutido', 'ecológico', 'gourmet']
    },
    productStock: {
        type: Number,
        required: true
    },
    productRating: {
        type: Number,
        required: true
    }
})

const product = mongoose.model("Product", productSchema, "Product")

module.exports = product