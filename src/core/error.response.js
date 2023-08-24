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
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
class BadRequestError extends ErrorResponse {
  constructor(
    message = reasonStatusCode.BADREQUEST,
    status = statusCode.BADREQUEST
  ) {
    super(message, status);
  }
}
class NotFound extends ErrorResponse {
  constructor(
    message = reasonStatusCode.NOTFOUND,
    status = statusCode.NOTFOUND
  ) {
    super(message, status);
  }
}
module.exports = {
  BadRequestError,
  NotFound,
  ErrorResponse,
};
