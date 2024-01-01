"use strict";

require('dotenv').config();

module.exports = {
    "errorOptions": {
        "level": "error",
        "db": process.env.MONGO_URI,
        "dbName": process.env.MONGO_DB,
        "collection": "error-logs",
        "options": {
            "useNewUrlParser": true,
            "useUnifiedTopology": true
        }
    },
    "httpOptions": {
        "level": "http",
        "db": process.env.MONGO_URI,
        "dbName": process.env.MONGO_DB,
        "collection": "http-logs",
        "options": {
            "useNewUrlParser": true,
            "useUnifiedTopology": true
        }
    },
    "combinedOptions": {
        "level": "debug",
        "db": process.env.MONGO_URI,
        "dbName": process.env.MONGO_DB,
        "collection": "logs",
        "options": {
            "useNewUrlParser": true,
            "useUnifiedTopology": true
        }
    }
}