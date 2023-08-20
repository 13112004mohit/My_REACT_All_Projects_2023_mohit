const { JsonWebTokenError, TokenExpiredError } = require("jsonwebtoken");
const ErrorHander = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server Error";

  //  Wrong mongodb id error
  if (err.name === "CastError") {
    const message = `Resource not found Invalid ${err.path}`;
    err = new ErrorHander(message, 400);
  }

  //  dublicate mongodb key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHander(message, 400);
  }

  //  Wrong  JWT Token error
  if (err.name === JsonWebTokenError) {
    const message = `Json Web Token is invalid,try again`;
    err = new ErrorHander(message, 400);
  }

  //  Wrong  Expire error
  if (err.name === TokenExpiredError) {
    const message = `Json Web Token is Expire,try again`;
    err = new ErrorHander(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
