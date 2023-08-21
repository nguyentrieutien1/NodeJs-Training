function errorHandler(err, req, res, next) {
  console.log(err);

  let statusCode = 500;
  let message = "Internal Server Error";
  res.status(statusCode).json({ message, statusCode });
}
export { errorHandler };
