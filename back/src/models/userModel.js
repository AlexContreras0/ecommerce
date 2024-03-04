const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({

    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: [true, "El correo es obligatorio"],
        unique: true,
        trim: true,
        minLength: 8,
        match: [/^\S+@\S+\.\S+$/, "Correo incorrecto"],
    },
    userPassword: {
        type: String,
        required: [true, "La contraseña es obligatoria"],
        trim: true,
        minLength: 8,
    },
    userRole: {
        type: String,
        required: true,
        enum: ['admin', 'user', 'supplier'],
        default: "user"
    },
    userImage: {
        type: String,
        required: true
    },
    userPhone: {
        type: Number,
        required: true
    },
    userAddress: {
        type: String,
        required: true
    },
    userCP: {
        type: Number,
        required: true
    },
    userLocalidad: {
        type: String,
        required: true
    },
    userProvincia: {
        type: String,
        required: true
    }

})

const user = mongoose.model("User", userSchema, "User")

module.exports = user