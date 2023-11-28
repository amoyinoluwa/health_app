const { body } = require("express-validator");
require("dotenv").config();
const { pool } = require('../../server')

const logger = require('../logger')

exports.VALIDATE_SIGNUP = [
  body("firstName").isString().notEmpty().trim().toLowerCase(),
  body("lastName").isString().notEmpty().trim().toLowerCase(),
  body("email")
    .isEmail()
    .isLowercase()
    .normalizeEmail()
    .custom(async (value, { req }) => {
      try {
        const user = await pool.query('SELECT email FROM users WHERE email = $1 ', [value])
        if (user.rowCount > 0) {
          logger.apiLoggerResponse(req, "error", "REGISTRATION CONFLICT", 409)
          return Promise.reject({
            statusCode: 409,
            message: "conflicting sign up credentials",
          });
        }
      } catch (err) {
        throw new err();
      }
    })
    .trim(),
  body("password").notEmpty().isLength({ min: 8 }),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("password does not match");
    }
    return true;
  }),
  body('phoneNumber').isString().notEmpty().trim(),
  body("userType").isString().notEmpty().trim().toLowerCase(),
];

exports.CHECK_LOGIN = [
  body("email")
    .isEmail()
    .trim()
    .notEmpty()
    .custom(async (value, { req }) => {
      const user = await pool.query('SELECT id, email, password, "firstName", "lastName", "phoneNumber", "userType" FROM users WHERE email = $1 ', [value])
      if (user.rowCount <= 0) {
        logger.apiLoggerResponse(req, "warn", "INVALID LOGIN CREDENTIALS", 404)
        return Promise.reject({
          statusCode: 404,
          message: "user not found",
        });
      }
      req.userInfo = user.rows[0]
    })
    .normalizeEmail(),
  body("password").notEmpty(),
];