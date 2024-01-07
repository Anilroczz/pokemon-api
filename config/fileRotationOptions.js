"use strict"

module.exports = {
    applicationOptions: {
        datePattern: "YYYY-MM-DD",
        dirname: "logs",
        filename: "application-logs-%DATE%.log",
        zippedArchive: true,
        auditFile: "./audits/application-audit.json",
        maxSize: "20m",
        maxFiles: "14d"
    },
    errorOptions: {
        datePattern: "YYYY-MM-DD",
        dirname: "logs",
        filename: "error-logs-%DATE%.log",
        zippedArchive: true,
        auditFile: "./audits/error-audit.json",
        maxSize: "20m",
        maxFiles: "14d"
    },
    httpOptions: {
        datePattern: "YYYY-MM-DD",
        dirname: "logs",
        filename: "http-logs-%DATE%.log",
        zippedArchive: true,
        auditFile: "./audits/http-audit.json",
        maxSize: "20m",
        maxFiles: "14d"
    }
  }