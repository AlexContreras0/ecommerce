const usersRouter = require('express').Router()
const { getUsers, getUserById, modifyById, createUser, login, refreshToken } = require("../controllers/userController")
const verifyToken = require("../middlewares/auth")

usersRouter.get('/', getUsers)
usersRouter.post('/', createUser)
usersRouter.post('/', login)
usersRouter.get('/', verifyToken, refreshToken)
usersRouter.get('/:id', getUserById)
usersRouter.post('/:id', modifyById)

module.exports = usersRouter