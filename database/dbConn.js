require("dotenv").config();
const mongoose = require("mongoose");

exports.connect = async function () {
  try {
    await mongoose.connect(process.env.DB_URI, {
      dbName: process.env.DB,
    });
    infologger.info("Connection to MongoDB instance established successfully");
  } catch (err) {
    errorlogger.error("Error connecting to MongoDB instance: ", err.message);
    process.exit(1);
  }
};
