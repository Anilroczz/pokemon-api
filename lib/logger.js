"use strict";

const config = require("config");
const winston = require("winston");
const dailyRotateFile = require("winston-daily-rotate-file");
require("winston-mongodb");

const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.simple(),
  winston.format.printf((info) => {
    return `[${info.timestamp}] ${info.level}: ${info.message}`;
  }),
);

const errorlogger = winston.createLogger({
  level: "error",
  format: format,
  transports: [
    new winston.transports.MongoDB(
      config.app.mongoTransportOptions.errorOptions,
    ),
    new dailyRotateFile(config.app.fileRotationOptions.errorOptions),
  ],
});

const httplogger = winston.createLogger({
  level: "http",
  format: format,
  transports: [
    new winston.transports.MongoDB(
      config.app.mongoTransportOptions.httpOptions,
    ),
    new dailyRotateFile(config.app.fileRotationOptions.httpOptions),
    new winston.transports.Console({level: 'http'})
  ],
});

const infologger = winston.createLogger({
  level: "info",
  format: format,
  transports: [
    new dailyRotateFile(config.app.fileRotationOptions.infoOptions),
    new winston.transports.Console({level: 'info'})
  ]
});

module.exports = { errorlogger, httplogger, infologger };
