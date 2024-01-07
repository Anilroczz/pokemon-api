"use strict";
require("dotenv").config();
const mongodb = require('mongodb');

const uploadMongo = function(data,collection) {
    const __mongoClient = new mongodb.MongoClient(process.env.MONGO_URI);

    __mongoClient.connect()
        .then((client) => {

            logger.log("info","Mongo Client connected successful");
            
            const db = client.db(process.env.MONGO_DB);
            logger.log("info",`Mongo database ${process.env.MONGO_DB} connected successful`);

            db.collection(collection).insertOne(data)
            .then((response) => {
                logger.log("info",`data upload successful`);
                console.log(response);
            }).catch((err) => {
                throw err;
            })

        })
        .catch((err) => {
            throw err;
        })
}

module.exports = uploadMongo;