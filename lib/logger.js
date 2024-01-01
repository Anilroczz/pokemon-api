"use strict";

const winston = require("winston");
require("winston-mongodb");
require("winston-daily-rotate-file");
const uploadFile = require("./fileUpload");
const fileRotationOptions = require('../config/fileRotationOptions');
const mongoTransportOptions = require('../config/mongoTransportOptions');

const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.simple(),
  winston.format.printf((info) => {
    return `[${info.timestamp}] ${info.level}: ${info.message}`;
  }),
  );
  
const transport = new winston.transports.DailyRotateFile(fileRotationOptions.errorOptions);
  
transport.on("new", function (newFilename) {
  console.log(`file ${newFilename} is created`);
});
transport.on("rotate", async function (oldFilename, newFilename) {
    console.log(`file rotated: ${oldFilename} => ${newFilename}`);
    await uploadFile(oldFilename);
});

const errorlogger = winston.createLogger({
    level: "error",
    format: format,
    transports: [
      new winston.transports.MongoDB(
        mongoTransportOptions.errorOptions,
      ),
      transport
  ],
});

const httplogger = winston.createLogger({
  level: "http",
  format: format,
  transports: [
    new winston.transports.MongoDB(
      mongoTransportOptions.httpOptions,
    ),
    new winston.transports.DailyRotateFile(
      fileRotationOptions.httpOptions,
    ),
    new winston.transports.Console({ level: "http" }),
  ],
});

const infologger = winston.createLogger({
  level: "info",
  format: format,
  transports: [
    new winston.transports.DailyRotateFile(
      fileRotationOptions.infoOptions,
    ),
    new winston.transports.Console({ level: "info" }),
  ],
});

      
module.exports = { errorlogger, httplogger, infologger };
