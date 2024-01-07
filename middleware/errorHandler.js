const errorHandler = function (err, req, res, next) {
  logger.log("error",err.message);
  return res.status(500).json({
    success: false,
    message: "error occured, see the errMessage key for more details",
    errMessage: err.message,
  });
};

module.exports = errorHandler;
