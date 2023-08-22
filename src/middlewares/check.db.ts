import { NextFunction, Request, Response } from "express";

const fs = require("fs");
const { dbPath } = require("../helpers/db_path");
function checkDbFile(req: Request, res: Response, next: NextFunction) {
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({ products: [] }));
    console.log("Created new db.json file.");
  }
  next();
}
export { checkDbFile };
