const statusCode = {
  BADREQUEST: 400,
  FORBIDDEN: 403,
  NOTFOUND: 404,
  CONFLICT: 409,
};
const reasonStatusCode = {
  BADREQUEST: "Bad Request",
  FORBIDDEN: "Forbidden",
  NOTFOUND: "Not found !",
};
class ErrorResponse extends Error {
  status: number;
  constructor(message: string, status: number) {
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
export { BadRequestError, NotFound, ErrorResponse };
