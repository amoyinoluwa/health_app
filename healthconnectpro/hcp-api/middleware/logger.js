const winston = require('winston');
const customLevels = {
  levels: {
    emerg: 0,
    alert: 1,
    crit: 2,
    error: 3,
    warn: 4,
    notice: 5,
    info: 6,
    debug: 7
  },
  colors: {
    emerg: 'red',
    alert: 'red',
    crit: 'red',
    error: 'red',
    warn: 'yellow',
    notice: 'amber',
    info: 'green',
    debug: 'black'
  }
};

// Create a logger instance with custom log levels and write to a file
const logger = winston.createLogger({
  levels: customLevels.levels,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple(),
    winston.format.align(),
    winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
  ),
  transports: [
    new winston.transports.File({ filename: 'logfile.log' }),
  ],
});

const apiLoggerResponse = (req, logType, message, statusCode) => {
  const timestamp = new Date().toISOString();
  const ip = req.ip;
  const method = req.method;
  const endpoint = req.originalUrl;

  logger.log(logType, `${logType.toUpperCase()} => ${statusCode} || ${timestamp} - ${message} - ${endpoint} - ${method} - ${ip}`)
}

const basicLog = (logType, message) => {
  const timestamp = new Date().toISOString();
  logger.log(logType, `${logType.toUpperCase()} => ${timestamp} - ${message}`)
}

module.exports = {
  apiLoggerResponse, basicLog, logger
}
