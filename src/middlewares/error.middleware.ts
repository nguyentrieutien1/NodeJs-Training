import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../core/error.response";

function errorHandler(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let statusCode: number = 500;
  let message: string = "Internal Server Error";
  console.log(err);

  if (err instanceof ErrorResponse) {
    statusCode = err.status;
    message = err.message;
  }
  res.status(statusCode).json({ message, statusCode });
}
export { errorHandler };
