const favModel = require("../models/favModel")

const getFav = async (req, res) => {

    try {
        
        const allFavoritos = await favModel.find()
        const resFavorito = allFavoritos.map(favorito => {
            return{
                id: favorito.id,
                favProductId: favorito.favProductId
            }
        })
        res.status(200).json({
            status: 'succeeded',
            data: resFavorito,
            error: null
        })

    } catch (error) {
        res
        .status(500)
        .json({ status: "failed", data: null, error: error.message })
    }

}


const addFav = async (req, res) => {

    try {
        
        const favoritoData = req.body
        const newFavorito = await favModel({
            favProductId: favoritoData.favProductId
        })
        await newFavorito.save()
        res.status(200).json({
            status: 'succeeded',
            data: newFavorito,
            error: null
        })

    } catch (error) {
        res
        .status(500)
        .json({ status: "failed", data: null, error: error.message })
        }
}


const deleteFav = async (req, res) => {

    try {
        
        const id = req.params.id
        await favModel.findByIdAndDelete(id)
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


module.exports = { getFav, addFav, deleteFav }