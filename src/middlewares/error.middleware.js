function errorHandler(err, req, res, next) {
   let statusCode = 500; 
   let message = "Internal Server Error"; 

   if (err instanceof Error) {
     message = err.message || message;
     statusCode = err.status || statusCode;
   }

   res.status(statusCode).json({ message, statusCode }); 
}
module.exports = {
     errorHandler
}