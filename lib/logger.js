"use strict";

const winston = require('winston');
require('winston-mongodb');
require('winston-daily-rotate-file');

const mongoTransportOptions = require('../config/mongoTransportOptions');
const fileRotationOptions = require('../config/fileRotationOptions');

const errorfilter = winston.format((info,options) => {
    return info.level === 'error' ? info : false;
});

const httpfilter = winston.format((info,options) => {
    return info.level === 'http' ? info : false;
});

const formatOptions = [
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    winston.format.json()
];

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(...formatOptions),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
                winston.format.simple(),
                winston.format.colorize(true),
                winston.format.printf((info) => {
                    return `[${info.timestamp}] ${info.level}: ${info.message}`;
                }),
            )
        }),
        new winston.transports.DailyRotateFile(fileRotationOptions.applicationOptions),
        new winston.transports.DailyRotateFile({
            ...fileRotationOptions.errorOptions,
            format: winston.format.combine(errorfilter(),...formatOptions)
        }),
        new winston.transports.DailyRotateFile({
            ...fileRotationOptions.httpOptions,
            format: winston.format.combine(httpfilter(),...formatOptions)
        }),
        new winston.transports.MongoDB(mongoTransportOptions.applicationOptions),
        new winston.transports.MongoDB({
            ...mongoTransportOptions.errorOptions,
            format: winston.format.combine(errorfilter(),...formatOptions)
        })
    ],
    defaultMeta: {
        'service': 'pokemon-api-service'
    }
})

module.exports = logger;