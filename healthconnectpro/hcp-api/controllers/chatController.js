const { validationResult } = require('express-validator')
const { response } = require("../middleware/response")

const { pool } = require("../server")


class messageController {
  static async chatHistory(req, res, next) {
    try {
      const chatHistory = await pool.query('SELECT id, "chatTopic", "chatStartedAt" FROM chats  WHERE "ownedBy" = $1 ORDER BY "createdAt" DESC', [req.userId])
      response(
        res, 200, chatHistory.rows, "chat history"
      )

      logger.apiLoggerResponse(req, "info", "ALL chat history", 200)
    }
    catch (err) {

      response(res, 500, err.message, "server error")
    }
  }

  static async showChatLogs(req, res) {
    const chatId = req.params.chatid
    const chatStartedAt = req.params.chatstartat
    const ownedBy = req.userId
    try {
      const chatHistory = await pool.query('SELECT * FROM chats WHERE id = $1 AND "ownedBy" = $2 AND "chatStartedAt" = $3', [chatId, ownedBy, chatStartedAt])
      response(
        res, 200, chatHistory.rows[0], "message info"
      )
    }
    catch (err) {
      response(res, 500, err.message, "server error")
    }
  }

  static async addChat(req, res) {
    const ownedBy = req.userId
    const { chatStartedAt, chatTopic, botResponse, chatId } = req.body
    try {
      if (chatId == null) {
        const logs = [{
          botResponse: botResponse,
          timeStamp: chatStartedAt,
          userAsked: chatTopic
        }]
        const logChat = await pool.query('INSERT INTO chats ("ownedBy", "chatStartedAt", "chatTopic", "chatLogs") VALUES ($1, $2, $3, $4) RETURNING *', [ownedBy, chatStartedAt, chatTopic, JSON.stringify(logs)])
        const newChatResult = await logChat.rows[0]
        return response(
          res, 201, newChatResult, "chat added successfully"
        )
      }

      const existingChat = await pool.query('SELECT "chatLogs" FROM chats WHERE id = $1 AND "ownedBy" = $2', [chatId, ownedBy])
      if (existingChat.rowCount <= 0) {
        return response(
          res, 404, [], "record not found"
        )
      }
      const chatRecord = await existingChat.rows[0].chatLogs
      const logs = [
        ...chatRecord, {
          botResponse: botResponse,
          timeStamp: chatStartedAt,
          userAsked: chatTopic
        }
      ]

      const updateCurrentChat = await pool.query('UPDATE chats SET "chatLogs" = $1 WHERE id = $2 AND "ownedBy" = $3 RETURNING *', [JSON.stringify(logs), chatId, ownedBy])
      const updatedChatResponse = updateCurrentChat.rows[0]
      response(
        res, 201, updatedChatResponse, "chat updated successfully"
      )
    }
    catch (err) {
      response(res, 500, err.message, "server error")
    }
  }

  static async removeChat(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return response(res, 422, errors.array(), "validation failed")
    }
    const { title, message } = req.body
    const { messageId } = req.params
    try {
      const addNewMessage = await pool.query('UPDATE chatHistory SET  title = $1, message = $2 WHERE id = $3', [title, message, messageId])
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