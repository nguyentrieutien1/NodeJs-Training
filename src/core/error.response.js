const statusCode = {
  FORBIDDEN: 403,
  CONFLICT: 409,
  BADREQUEST: 400,
  NOTFOUND: 404,
};
const reasonStatusCode = {
  FORBIDDEN: "Forbidden",
  BADREQUEST: "Bad Request",
  NOTFOUND: "Not found !"
};
class ErrorResponse extends Error {
  constructor(message, errorData, status) {
    super(message);
    this.status = status;
    this.errorData = errorData;
  }
}
class BadRequestError extends ErrorResponse {
  constructor(
    message = reasonStatusCode.BADREQUEST,
    errorData = {},
    status = statusCode.BADREQUEST
  ) {
    super(message, errorData, status);
  }
}
class NotFound extends ErrorResponse {
  constructor(
    message = reasonStatusCode.NOTFOUND,
    errorData = {},
    status = statusCode.NOTFOUND
  ) {
    super(message, errorData, status);
  }
}
module.exports = {
  BadRequestError,
  NotFound,
  ErrorResponse,
};
