const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/utils");
const emailService = require("../services/emailServices");
const { json } = require("express");


const getUsers = async (req, res) => {
    try {
        const data = await userModel.find()
        res.status(200).json({ status: "succeeded", data, error: null})
    } catch (error) {
        res
        .status(500)
        .json({ status: "failed", data: null, error: error.message})
        
    }
}

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await userModel.findById(userId)
        res.status(200).json({ status: "succeeded", user, error: null})
    } catch (error) {
        res
        .status(500)
        .json({ status: "failed", data: null, error: error.message })
        
    }
}

const modifyById = async (req, res) => {

    try {
        const id = req.params.id
        const { userName, userEmail, userPassword, userPhone, userAddress, userCP, userLocality, userProvince } = req.body

        const userAux = await userModel.findById(id)

        if (!userAux) return res.status(404).send('El usuario no existe')

        if (userName) {
            userAux.userName = userName
        }
        if (userEmail) {
            userAux.userEmail = userEmail
        }
        if (userPassword) {
            userAux.userPassword = userPassword
        }
        if (userPhone) {
            userAux.userPhone = userPhone
        }
        if (userAddress) {
            userAux.userAddress = userAddress
        }
        if (userCP) {
            userAux.userCP = userCP
        }
        if (userLocality) {
            userAux.userLocality = userLocality
        }
        if (userProvince) {
            userAux.userProvince = userProvince
        }

        await userAux.save()

        res.status(200).json({
            status: 'succeeded',
            data: userAux,
            error: null
        })
    } catch (error) {
        res
            .status(500)
            .json({ status: "failed", data: null, error: error.message })
    }


}

const createUser = async (req, res) => {
  try {
    console.log("este es el req del create user",req.params)
    console.log("este es el req del create user",req.body)
    const newUser = new userModel({
      userName: req.body.name,
      userEmail: req.body.email,
      userPassword: await bcrypt.hash(req.body.password, 10),
      userPhone: Number(req.body.phone),
      userAddress: req.body.address,
      userCP: Number(req.body.cp),
      userLocality: req.body.locality,
      userProvince: req.body.province,
    });

    await newUser.save();

    // const to = email
    // const subject = `Alta registro usuario ${userName} con email ${userEmail}`
    // const html = `Gracias ${userName} por darte de alta en nuestra empresa se ha creado un nuevo usuario con email ${userEmail}`
    // await emailService.sendEmail(to, subject, html)
    
    res.status(201).json({
      status: "Succeeded",
      message: "Usuario creado exitosamente",
      data: newUser,
      error: null
    });
  } catch (error) {
    console.log(error);

    if (error.code === 11000) {
      return res
        .status(404)
        .json({ status: "Failed", data: null, error: "El correo ya existe" });
    }

    if (error.message.includes("Correo incorrecto")) {
      return res.status(404).json({
        status: "Failed",
        data: null,
        error: "El correo es incorrecto",
      });
    }

    res
      .status(404)
      .json({ status: "Failed", data: null, error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await userModel.findOne({ userEmail: req.params.email });
    if (user) {
      const validatePassword = await bcrypt.compare(
        req.params.password,
        user.userPassword
      );

      if (validatePassword) {
        const token = generateToken(
          { id: user.id, email: user.userEmail, role: user.userRole },
          false
        );

        const tokenRefresh = generateToken({
          id: user.id,
          email: user.userEmail,
          role: user.userRole,
        });

        return res.status(201).json({
          status: "Success",
          message: "Usuario logueado correctamente",
          data: {
            user: user,
            token: token,
            tokenRefresh: tokenRefresh,
          },
        });
      }

      return res.status(400).json({
        status: "Failed",
        message: null,
        error: "Usuario y contraseña no encontrado"
      })
    }

    return res.status(400).json({
        status: "Failed",
        message: null,
        error: "Usuario y contraseña no encontrado"
      })
    
  } catch (error) {

    return res.status(404).json({
        status: "Failed",
        message: null,
        error: error.message,
    })
  }
};

const refreshToken = async (req, res) => {
    if (!req.params.user) {
        return res.status(401).json({ error: "Acceso denegado" })
    }
    const user = {id: req.params.user.id, email: req.params.user.userEmail, role: req.params.user.userRole }
    const token = generateToken(user, false)
    const refreshToken = generateToken(user, true)

    res.status(200).json({
        status: "succeeded",
        data: {
            token,
            refreshToken
        },
        error: null
    })

}

const getToken = async (req, res) => {
  if (!req.body.email) {
      return res.status(401).json({ error: "Acceso denegado" })
  }
  const user = { email: req.body.email, password: req.body.password }
  const token = generateToken(user, false)
  const refreshToken = generateToken(user, true)

  res.status(200).json({
      status: "succeeded",
      data: {
          token,
          refreshToken
      },
      error: null
  })

}

module.exports = { getUsers, getUserById, modifyById, createUser, login, refreshToken, getToken }