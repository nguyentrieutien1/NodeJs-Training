const statusCode = {
     OK: 200,
     CREATED:201
}
const reasonStatusCode = {
     OK: "OK !",
     CREATED: "Created !"
}
class SuccessResponse {
  constructor({
    message,
    metadata = {},
    status = statusCode.OK,
    reasonStatus = reasonStatusCode.OK,
  }) {
    this.metadata = metadata;
    this.message = message ? message : "OK";
    this.status = status;
    this.reasonStatus = reasonStatus;
  }
  send = (res) => {
    console.log(this);
    return res.status(this.status).json(this);
  };
}
class Ok extends SuccessResponse {
  constructor({ metadata, message }) {
    super({ message, metadata });
  }
}
class Success extends SuccessResponse {
  constructor({
    message,
    metadata,
    status = statusCode.CREATED,
    reasonStatus = reasonStatusCode.CREATED,
  }) {
    super({ message, status, reasonStatus, metadata });
  }
}
module.exports = {
     Ok, 
     Success
}