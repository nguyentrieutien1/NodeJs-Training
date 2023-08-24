const { ErrorResponse } = require("../core/error.response");

function errorHandler(err, res) {
  console.log(err);
  let statusCode = 500;
  let message = "Internal Server Error";
  let errors = {};

  if (err instanceof ErrorResponse) {
    message = err.message || message;
    statusCode = err.status || statusCode;
    errors = err.errors || errors;
  }

  res.status(statusCode).json({ message, statusCode, errors });
}
module.exports = {
  errorHandler,
};
