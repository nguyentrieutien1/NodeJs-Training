"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(err, req, res, next) {
    let statusCode = 500;
    let message = "Internal Server Error";
    res.status(statusCode).json({ message, statusCode });
}
exports.errorHandler = errorHandler;
