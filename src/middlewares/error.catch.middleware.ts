import { NextFunction, Request, Response } from "express";

const catchErrorHandler = (callback) => {
  return (req: Request, res: Response, next: NextFunction) => {
    callback(req, res, next).catch(next);
  };
};
export { catchErrorHandler };
