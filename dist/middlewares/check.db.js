"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDbFile = void 0;
const fs = require("fs");
const { dbPath } = require("../helpers/db_path");
function checkDbFile(req, res, next) {
    if (!fs.existsSync(dbPath)) {
        fs.writeFileSync(dbPath, JSON.stringify({ cart: [] }));
        console.log("Created new db.json file.");
    }
    next();
}
exports.checkDbFile = checkDbFile;
