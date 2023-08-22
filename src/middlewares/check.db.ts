import { NextFunction, Request, Response } from "express";

const fs = require("fs");
const { cartdbPath, productdbPath } = require("../helpers/db_path");
function checkDbFile(req: Request, res: Response, next: NextFunction) {
  if (!fs.existsSync(cartdbPath) || !fs.existsSync(productdbPath)) {
    fs.writeFileSync(cartdbPath, JSON.stringify({ cart: [] }));
    fs.writeFileSync(productdbPath, JSON.stringify({ cart: [] }));
    console.log("Created new db.json file.");
  }
  next();
}
export { checkDbFile };
