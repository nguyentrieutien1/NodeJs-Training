"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = exports.NotFound = exports.BadRequestError = void 0;
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
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
exports.ErrorResponse = ErrorResponse;
class BadRequestError extends ErrorResponse {
    constructor(message = reasonStatusCode.BADREQUEST, status = statusCode.BADREQUEST) {
        super(message, status);
    }
}
exports.BadRequestError = BadRequestError;
class NotFound extends ErrorResponse {
    constructor(message = reasonStatusCode.NOTFOUND, status = statusCode.NOTFOUND) {
        super(message, status);
    }
}
exports.NotFound = NotFound;
