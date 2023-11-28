const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { pool } = require('../server')
require('dotenv').config()
const { response } = require('../middleware/response')
const bcrypt = require('bcrypt')
const logger = require('../middleware/logger')

class AuthController {
  static async createAccount(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return response(res, 422, errors.array(), "validation failed")
    }
    try {
      const { firstName, lastName, phoneNumber, email, password, userType } = req.body
      const hashedPassword = await bcrypt.hash(password, 10)

      const addNewUser = await pool.query('INSERT INTO users ("firstName", "lastName", email,  password, "phoneNumber", "userType") VALUES ($1, $2, $3, $4, $5, $6) RETURNING email, "firstName", "lastName", "phoneNumber", "userType", "createdAt", "updatedAt"', [firstName, lastName, email, hashedPassword, phoneNumber, userType])
      const result = await addNewUser.rows[0]
      response(res, 201, result, "New User Created!")
      logger.apiLoggerResponse(req, "info", "NEW USER CREATED", 201)
    }
    catch (err) {
      response(res, 500, err.message, "server error")
    }
  }

  static async login(req, res, next) {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return response(res, 422, errors.array(), "validation error")
    }

    const { email, password } = req.body
    const id = req.userInfo.id
    const hashedPassword = req.userInfo.password
    const firstName = req.userInfo.firstName
    const phoneNumber = req.userInfo.phoneNumber
    const lastName = req.userInfo.lastName
    const userType = req.userInfo.userType

    try {
      const isPassword = await bcrypt.compare(password, hashedPassword)
      if (!isPassword) {
        logger.apiLoggerResponse(req, "warn", "INCORRECT PASSWORD", 404)
        return response(res, 404, "invalid login credentials", "failed login attempt")
      }
      const token = jwt.sign({ userId: id }, process.env.JWT_SECRET, { "expiresIn": 3600 })
      response(
        res, 200, {
        id,
        email,
        token,
        firstName,
        lastName,
        phoneNumber,
        userType,
        expiresIn: 3600
      },
        "login successful"
      )
      logger.apiLoggerResponse(req, "info", "LOGIN SUCCESSFUL", 200)
    }
    catch (err) {
      response(res, 500, err.message, "server error")
    }
  }
}

module.exports = AuthController