import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { BadRequestError, ErrorResponse } from "../core/error.response";

function errorHandler(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let statusCode: number = 500;
  let message: string = "Internal Server Error";
  if (err instanceof ErrorResponse) {
    message = err.message;
    statusCode = err.status;
  }
  res.status(statusCode).json({ message, statusCode });
}
export { errorHandler };
