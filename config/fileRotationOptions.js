"use strict"

module.exports = {
    applicationOptions: {
        datePattern: "YYYY-MM-DD",
        dirname: "logs",
        filename: "application-%DATE%.log",
        zippedArchive: true,
        auditFile: "./audits/application-audit.json",
        maxSize: "20m",
        maxFiles: "14d"
    },
    errorOptions: {
        datePattern: "YYYY-MM-DD",
        dirname: "logs",
        filename: "error-%DATE%.log",
        zippedArchive: true,
        auditFile: "./audits/error-audit.json",
        maxSize: "20m",
        maxFiles: "14d"
    },
    httpOptionss: {
        datePattern: "YYYY-MM-DD",
        dirname: "logs",
        filename: "http-%DATE%.log",
        zippedArchive: true,
        auditFile: "./audits/http-audit.json",
        maxSize: "20m",
        maxFiles: "14d"
    }
  }