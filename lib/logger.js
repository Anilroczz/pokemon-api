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
        new winston.transports.Console(),
        new winston.transports.DailyRotateFile(fileRotationOptions.combinedOptions),
        new winston.transports.DailyRotateFile({
            ...fileRotationOptions.errorOptions,
            format: winston.format.combine(errorfilter(),...formatOptions,winston.format.errors({stack: true}))
        }),
        new winston.transports.DailyRotateFile({
            ...fileRotationOptions.httpOptions,
            format: winston.format.combine(httpfilter(),...formatOptions)
        }),
        new winston.transports.MongoDB(mongoTransportOptions.applicationOptions),
        new winston.transports.MongoDB({
            ...mongoTransportOptions.errorOptions,
            format: winston.format.combine(errorfilter(),...formatOptions,winston.format.errors({stack: true}))
        })
    ],
    defaultMeta: {
        'service': 'pokemon-api-service'
    }
})

module.exports = logger;