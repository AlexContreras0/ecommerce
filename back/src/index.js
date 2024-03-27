//require("dotenv").config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const productsRouter = require('./routes/productsRouter')
const favsRouter = require('./routes/favsRouter')
const cartsRouter = require('./routes/cartsRouter')
const usersRouter = require('./routes/usersRouter')
const dotenv = require('dotenv')
const app = express()
const port = 9000

dotenv.config()

//Mongo Alex
//const url_mongo = 'mongodb+srv://alexcontrerasg98:bbVNZcJHIv0dP1rW@donut.wpe2e45.mongodb.net/?retryWrites=true&w=majority'

//Mongo Sara
const url_mongo = 'mongodb+srv://saramalagamba:fU22UMs!9dhLtDQ@cluster0.9bckfo4.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url_mongo)
const db = mongoose.connection

db.on("error", (error) => {
    console.log(`Error al conectar con mongo ${error}`)
})

db.on("connected", () => {
    console.log(`Success connect`)
})

db.on("disconnected", () => {
    console.log(`Mongo is disconected`)
})

app.use(express.json())
app.use(cors())

app.use('/products', productsRouter)
app.use('/favs', favsRouter)
app.use('/carts', cartsRouter)
app.use('/users', usersRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
