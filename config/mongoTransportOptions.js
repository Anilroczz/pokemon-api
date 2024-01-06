"use strict";

require('dotenv').config();

module.exports = {
    applicationOptions: {
        level: "debug",
        db: process.env.MONGO_URI,
        dbName: process.env.MONGO_DB,
        collection: "application-logs",
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    errorOptions: {
        level: "error",
        db: process.env.MONGO_URI,
        dbName: process.env.MONGO_DB,
        collection: "application-error-logs",
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
}