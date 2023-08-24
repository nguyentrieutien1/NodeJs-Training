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
  constructor(message, errors, status) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
}
class BadRequestError extends ErrorResponse {
  constructor(
    message = reasonStatusCode.BADREQUEST,
    errors = {},
    status = statusCode.BADREQUEST
  ) {
    super(message, errors, status);
  }
}
class NotFound extends ErrorResponse {
  constructor(
    message = reasonStatusCode.NOTFOUND,
    errors = {},
    status = statusCode.NOTFOUND
  ) {
    super(message, errors, status);
  }
}
module.exports = {
  BadRequestError,
  NotFound,
  ErrorResponse,
};
