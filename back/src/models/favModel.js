const mongoose = require("mongoose")
const Schema = mongoose.Schema

const favSchema = new Schema({

    favProductId: {
        type: String,
        required: true
    }
})

const fav = mongoose.model("Fav", favSchema, "Fav")

module.exports = fav