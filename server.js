const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const cors = require("cors");
const httpLogger = require("./middleware/httpLogger");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(httpLogger);

app.use("/", require("./routes/index.router.js"));
app.use("/api/0.0.1/pokemon", require("./routes/pokemon.router.js"));

app.all("*", function (req, res) {
  errorlogger.error("404 Page Not Found!!");
  res.status(404).send("Not Found");
});

app.use(errorHandler);

module.exports = app;
