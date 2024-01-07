"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const path = require("node:path");
const helmet = require("helmet");
const cors = require("cors");
const httpLogger = require("./middleware/httpLogger");
const errorHandler = require("./middleware/errorHandler");
const corsOptions = require("./config/corsOptions.js");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/css", express.static(path.join(__dirname, "public", "css")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors(corsOptions));
app.use(httpLogger);

app.use("/", require("./routes/index.router.js"));
app.use("/api/v1/pokemon", require("./routes/pokemon.router.js"));

app.all("*", function (req, res) {
  logger.log("error","404 Page Not Found!!");
  res.status(404).render("404");
});

app.use(errorHandler);

module.exports = app;
