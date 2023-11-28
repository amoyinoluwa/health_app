const { body, check } = require("express-validator");
require("dotenv").config();
const { pool } = require('../../server');
const logger = require("../logger");

exports.VALIDATE_MESSAGE = [
  body("title").isString().notEmpty().trim().toLowerCase(),
  body("message").notEmpty(),
];

exports.CHECK_OWNER = [
  body("message")
    .custom(async (_, { req }) => {
      const isOwnedBy = await pool.query('SELECT * FROM messages WHERE "authorId" = $1 ', [req.userId])
      if (isOwnedBy.rowCount <= 0) {
        logger.apiLoggerResponse(req, "warn", "PERMISSION DENIED!!!", 401)
        return Promise.reject("unauthorized for update");
      }
    }),
]