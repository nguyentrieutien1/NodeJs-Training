const { ErrorResponse } = require("../core/error.response");

function errorHandler(err, res) {
  let message = "Server is wrong, please access later !";
  let statusCode = 500;
  let errorData = {};
  if (err instanceof ErrorResponse) {
    message = err.message || message;
    statusCode = err.status || statusCode;
    errorData = err.errorData || errorData;
  }
  console.log(err);
  res.status(statusCode).json({ message, statusCode, errorData });
}
module.exports = {
  errorHandler,
};
