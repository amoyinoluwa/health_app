const express = require('express')
const router = express.Router()
const { VALIDATE_SIGNUP, CHECK_LOGIN } = require('../middleware/validation/auth')
const { CHECK_OWNER, VALIDATE_MESSAGE } = require('../middleware/validation/message')
const authController = require('../controllers/authController')
const messageController = require('../controllers/messageController')
const chatController = require('../controllers/chatController')
const { isLoggedIn } = require('../middleware/utils')


router.post('/register', VALIDATE_SIGNUP, authController.createAccount)
router.post('/login', CHECK_LOGIN, authController.login)

router.get('/messages', messageController.allMessages)
router.get('/message/:messageId', messageController.showMessage)

router.post(
  '/message',
  isLoggedIn,
  VALIDATE_MESSAGE,
  messageController.addMessage
)

router.put(
  '/message/:messageId',
  isLoggedIn,
  CHECK_OWNER,
  VALIDATE_MESSAGE,
  messageController.updateMessage
)

router.delete(
  '/message/:messageId',
  isLoggedIn,
  CHECK_OWNER,
  messageController.removeMessage
)

// chats endpoint
router.post(
  '/chats',
  isLoggedIn,
  chatController.addChat
)

router.get(
  '/chats',
  isLoggedIn,
  chatController.chatHistory
)

router.get(
  '/chat/:chatid/:chatstartat',
  isLoggedIn,
  chatController.showChatLogs
)

module.exports = router