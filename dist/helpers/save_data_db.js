"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveDbData = void 0;
const fs_1 = __importDefault(require("fs"));
const db_path_1 = require("./db_path");
function saveDbData(data) {
    fs_1.default.writeFileSync(db_path_1.dbPath, JSON.stringify(data, null, 2));
}
exports.saveDbData = saveDbData;
