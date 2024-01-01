"use strict"

module.exports = {
    "errorOptions": {
      "datePattern": "YYYY-MM-DD",
      "dirname": "logs",
      "filename": "error-%DATE%.log",
      "zippedArchive": true,
      "auditFile": "./audits/error-audit.json",
      "maxSize": "20m",
      "maxFiles": "14d"
    },
    "httpOptions": {
      "datePattern": "YYYY-MM-DD",
      "dirname": "logs",
      "filename": "http-%DATE%.log",
      "zippedArchive": true,
      "auditFile": "./audits/http-audit.json",
      "maxSize": "20m",
      "maxFiles": "14d"
    },
    "infoOptions": {
      "datePattern": "YYYY-MM-DD",
      "dirname": "logs",
      "filename": "info-%DATE%.log",
      "zippedArchive": true,
      "auditFile": "./audits/info-audit.json",
      "maxSize": "20m",
      "maxFiles": "14d"
    },
    "combinedOptions": {
      "datePattern": "YYYY-MM-DD",
      "dirname": "logs",
      "filename": "info-%DATE%.log",
      "zippedArchive": true,
      "auditFile": "./audits/info-audit.json",
      "maxSize": "20m",
      "maxFiles": "14d"
    }
  }