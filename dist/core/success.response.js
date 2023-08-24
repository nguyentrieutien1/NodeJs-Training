"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Success = exports.Ok = void 0;
const statusCode = {
    OK: 200,
    CREATED: 201,
};
const reasonStatusCode = {
    OK: "OK !",
    CREATED: "Created !",
};
class SuccessResponse {
    constructor({ message, metadata = {}, status = statusCode.OK, reasonStatus = reasonStatusCode.OK, }) {
        this.send = (res) => {
            return res.status(this.status).json(this);
        };
        this.metadata = metadata;
        this.message = message ? message : "OK";
        this.status = status;
        this.reasonStatus = reasonStatus;
    }
}
class Ok extends SuccessResponse {
    constructor({ metadata, message }) {
        super({ message, metadata });
    }
}
exports.Ok = Ok;
class Success extends SuccessResponse {
    constructor({ message, metadata, status = statusCode.CREATED, reasonStatus = reasonStatusCode.CREATED, }) {
        super({ message, status, reasonStatus, metadata });
    }
}
exports.Success = Success;
