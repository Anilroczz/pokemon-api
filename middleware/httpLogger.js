const morgan = require("morgan");

const httpLogger = function (req, res, next) {
  morgan("dev", {
    stream: {
      write: (message) => {
        const http_message = message
          .replace(/\x1b\[[0-9;]*m/g, "")
          .replace(/\n/g, "");
        httplogger.http(http_message);
      },
    },
  })(req, res, next);
};

module.exports = httpLogger;
