const errorHandler = function (err, req, res, next) {
  errorlogger.error(err.stack);
  return res.status(500).json({
    success: false,
    message: "error occured, see the errMessage key for more details",
    errMessage: err.stack,
  });
};

module.exports = errorHandler;
