import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

function errorHandler(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let statusCode: number = 500;
  let message: string = "Internal Server Error";
  res.status(statusCode).json({ message, statusCode });
}
export { errorHandler };
