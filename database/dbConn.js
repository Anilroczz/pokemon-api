"use strict";

require("dotenv").config();
const mongoose = require("mongoose");

exports.connect = function () {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      logger.log("debug", `Connection to MongoDB instance established successfully`);
    })
    .catch((err) => {
      logger.log("error","Error connecting to MongoDB instance: ", err.message);
      process.exit(1);
    });
};
