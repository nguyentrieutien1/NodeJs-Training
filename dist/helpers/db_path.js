"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbPath = void 0;
const path_1 = __importDefault(require("path"));
const dbPath = path_1.default.join(__dirname, "../database/db.json");
exports.dbPath = dbPath;
