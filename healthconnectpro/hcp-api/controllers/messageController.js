const { validationResult } = require('express-validator')
const { response } = require("../middleware/response")

const { pool } = require("../server")

const logger = require('../middleware/logger')

class messageController {
  static async allMessages(req, res, next) {
    try {
      const messages = await pool.query('SELECT a.id, b.name AS author, a.title, a.message, a."createdAt", a."updatedAt" FROM messages a JOIN users b ON a."authorId" = b.id ')
      response(
        res, 200, messages.rows, "list of all messages"
      )

      logger.apiLoggerResponse(req, "info", "ALL MESSAGES", 200)
    }
    catch (err) {

      response(res, 500, err.message, "server error")
    }
  }

  static async showMessage(req, res) {
    const messageId = req.headers.messageid
    try {
      const messages = await pool.query('SELECT b.name AS author, a.title, a.message, a."createdAt", a."updatedAt" FROM messages a JOIN users b ON a."authorId" = b.id WHERE a.id = $1', [messageId])
      response(
        res, 200, messages.rows, "message info"
      )
      logger.apiLoggerResponse(req, "info", "DISPLAY A MESSAGE RESOURCE", 200)
    }
    catch (err) {
      response(res, 500, err.message, "server error")
    }
  }

  static async addMessage(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return response(res, 422, errors.array(), "validation failed")
    }
    const author = req.userId
    const { title, message } = req.body
    try {
      const addNewMessage = await pool.query('INSERT INTO messages ("authorId", title, message) VALUES ($1, $2, $3) RETURNING *', [author, title, message])
      const newMessageResult = addNewMessage.rows
      response(
        res, 201, newMessageResult, "new message added"
      )
      logger.apiLoggerResponse(req, "info", "ADDED NEW MESSAGE", 201)
    }
    catch (err) {
      response(res, 500, err.message, "server error")
    }
  }

  static async updateMessage(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return response(res, 422, errors.array(), "validation failed")
    }
    const { title, message } = req.body
    const { messageId } = req.params
    try {
      const addNewMessage = await pool.query('UPDATE messages SET  title = $1, message = $2 WHERE id = $3 RETURNING *', [title, message, messageId])
      const newMessageResult = addNewMessage.rows[0]
      response(
        res, 200, newMessageResult, "message updated successfully"
      )
      logger.apiLoggerResponse(req, "info", "MESSAGE UPDATED", 200)
    }
    catch (err) {
      response(res, 500, err.message, "server error")
    }
  }

  static async removeMessage(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return response(res, 422, errors.array(), "validation failed")
    }
    const { title, message } = req.body
    const { messageId } = req.params
    try {
      const addNewMessage = await pool.query('UPDATE messages SET  title = $1, message = $2 WHERE id = $3', [title, message, messageId])
      const newMessageResult = addNewMessage.rows[0]
      response(
        res, 200, newMessageResult, "message updated successfully"
      )
      logger.apiLoggerResponse(req, "info", "MESSAGE REMOVED", 200)

    }
    catch (err) {
      response(res, 500, err.message, "server error")
    }
  }
}

module.exports = messageController