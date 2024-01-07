"use strict";

require("dotenv").config();
require("./database/dbConn").connect();

const http = require("node:http");
const mongoose = require("mongoose");
const app = require("./server");
const logger = require("./lib/logger");

global.logger = logger;

const port = process.env.API_PORT || 3000;
const httpServer = http.createServer(app);

mongoose.connection.on("connected", function () {
  logger.log("debug","Mongoose default connection open to mongo cluster instance");

  httpServer.listen(port, function () {
    logger.log("debug","Pokemon API Server Started..!");
    logger.log("debug",`Insecure :: Server running on port ${port}...`);
  });
});
