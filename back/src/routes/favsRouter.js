const { getFav, addFav, deleteFav } = require('../controllers/favController')

const favsRouter = require('express').Router()

favsRouter.get('/', getFav)
favsRouter.post('/', addFav)
favsRouter.delete('/:id', deleteFav)

module.exports = favsRouter