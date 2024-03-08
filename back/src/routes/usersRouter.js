const usersRouter = require('express').Router()
const { getUsers, getUserById, modifyById, createUser, login, refreshToken, getToken } = require("../controllers/userController")
const verifyToken = require("../middlewares/auth")

usersRouter.get('/', getUsers)
usersRouter.post('/', createUser)
usersRouter.get('/', verifyToken, refreshToken)
usersRouter.post('/login', login)
usersRouter.get('/:id', getUserById)
usersRouter.post('/:id', modifyById)
usersRouter.post('/auth-token', getToken)

module.exports = usersRouter