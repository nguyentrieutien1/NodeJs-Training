"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchErrorHandler = void 0;
const catchErrorHandler = callback => {
    return (req, res, next) => {
        callback(req, res, next).catch(next);
    };
};
exports.catchErrorHandler = catchErrorHandler;
