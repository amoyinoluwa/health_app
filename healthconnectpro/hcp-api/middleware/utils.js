const jwt = require('jsonwebtoken')
const { response } = require('../middleware/response')
const { logger, apiLoggerResponse } = require('./logger')

module.exports = {
  isLoggedIn: async (req, res, next) => {
    const checkHeader = req.headers['authorization']
    if (!checkHeader) {
      apiLoggerResponse(
        req, "error", `CANNOT IDENTIFY BEARER TOKEN`, 400
      )
      return response(res, 400, null, "missing token authorization")
    }
    try {
      const token = checkHeader.split(" ")[1]
      const verifyToken = await jwt.verify(token, process.env.JWT_SECRET)
      req.userId = verifyToken.userId
      next()
    }
    catch (err) {
      response(res, 400, err.message, "Token expired")
      apiLoggerResponse(
        req, "error", `${err.message.toUpperCase()}`, 400
      )

    }
  },
}