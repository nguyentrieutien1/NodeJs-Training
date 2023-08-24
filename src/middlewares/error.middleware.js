const { ErrorResponse } = require("../core/error.response");

function errorHandler(err, req, res, next) {
   let statusCode = 500; 
   let message = "Internal Server Error"; 
  console.log(err);
   if (err instanceof ErrorResponse) {
     message = err.message || message;
     statusCode = err.status || statusCode;
   }

   res.status(statusCode).json({ message, statusCode }); 
}
module.exports = {
     errorHandler
}