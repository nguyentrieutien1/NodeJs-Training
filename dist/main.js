"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_middleware_1 = require("./middlewares/error.middleware");
require("./database/db.json");
const app = (0, express_1.default)();
const check_db_1 = require("./middlewares/check.db");
const index_route_1 = __importDefault(require("./routes/index.route"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 9000;
// MIDDLEWARES
app.use(check_db_1.checkDbFile);
app.use(express_1.default.json({}));
app.use(error_middleware_1.errorHandler);
// RUN ROUTERS
(0, index_route_1.default)(app);
app.listen(PORT, () => {
    console.log(`App is running on link http://localhost:${PORT}`);
});
