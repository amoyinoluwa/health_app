const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
// const morgan = require('morgan')
const api = require('./server')
const routes = require('./routes/router')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname)))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())
app.use(cors())

const { logger, apiLoggerResponse } = require('./middleware/logger')


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'PUT, PATCH, GET, DELETE, POST')
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type')
  next()
})

app.use(process.env.BASE_URL, routes)

app.use('*', (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: 'PAGE NOT FOUND'
  })
  apiLoggerResponse(
    req, 'warn', `${res.statusMessage}`, 404
  )
})

process.on('unhandledRejection', (reason, promise) => {
  logger.error('ERROR => Unhandled Promise Rejection', reason)
  logger.error('Promise statck trace', promise)
})

api.START_APPLICATION(app)

