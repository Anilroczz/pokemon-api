"use strict";

require("dotenv").config();
require("./database/dbConn").connect();

const http = require("node:http");
const mongoose = require("mongoose");
const app = require("./server");
const { errorlogger, httplogger, infologger } = require("./lib/logger");

global.errorlogger = errorlogger;
global.httplogger = httplogger;
global.infologger = infologger;

const port = process.env.PORT || 3000;
const httpServer = http.createServer(app);

mongoose.connection.on("connected", function () {
  infologger.info("Mongoose default connection open to mongo cluster instance");

  httpServer.listen(port, function () {
    infologger.info("Http API Server Started!");
    infologger.info(`Insecure :: Server running on port ${port}`);
  });
});
