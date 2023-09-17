//logger.js
const winston = require('winston');
require('winston-daily-rotate-file');

const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: 'error.log' || 'info.log' || 'http.log',
  datePattern: 'YYYY-MM-DD',
  maxFiles: '14d',
});

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  transports: [
    fileRotateTransport,
    new winston.transports.File({
      filename: 'error.log',
      level: 'error',
      dirname: 'logs',
      exceptionHandlers: [
        new winston.transports.File({
          filename: 'exception.log',
          dirname: 'logs',
        }),
      ],
      rejectionHandlers: [
        new winston.transports.File({
          filename: 'rejections.log',
          dirname: 'logs',
        }),
      ],
      format: winston.format.combine(
        winston.format.prettyPrint(),
        winston.format.colorize({ colors: { info: 'red' } }),
        winston.format.timestamp({
          format: 'YYYY-MM-DD hh:mm:ss.SSS A', // 2022-01-25 03:23:10.350 PM
        }),
        winston.format.align(),
        winston.format.printf((info) => {
          return `${info.timestamp} ${info.level}: ${info.message}`;
        }),
      ),
      silent: process.env.NODE_ENV === 'production',
    }),
    new winston.transports.File({
      filename: 'info.log',
      level: 'info',
      dirname: 'logs',
      format: winston.format.combine(
        winston.format.prettyPrint(),
        winston.format.colorize({ colors: { info: 'green' } }),
        winston.format.timestamp({
          format: 'YYYY-MM-DD hh:mm:ss.SSS A', // 2022-01-25 03:23:10.350 PM
        }),
        winston.format.align(),
        winston.format.printf((info) => {
          return `${info.timestamp} ${info.level}: ${info.message}`;
        }),
      ),
      silent: process.env.NODE_ENV === 'production',
    }),
    new winston.transports.File({
      filename: 'http.log',
      level: 'http',
      dirname: 'logs',
      format: winston.format.combine(
        winston.format.prettyPrint(),
        winston.format.colorize({ colors: { info: 'blue' } }),
        winston.format.timestamp({
          format: 'YYYY-MM-DD hh:mm:ss.SSS A', // 2022-01-25 03:23:10.350 PM
        }),
        winston.format.align(),
        winston.format.printf((info) => {
          return `${info.timestamp} ${info.level}: ${info.message}`;
        }),
      ),
      silent: process.env.NODE_ENV === 'production',
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

module.exports = logger;
