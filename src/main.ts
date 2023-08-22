import express from "express";
import { errorHandler } from "./middlewares/error.middleware";
import "./database/db.json";
const app = express();
import { checkDbFile } from "./middlewares/check.db";
import appRouters from "./routes/index.route";
import dotenv from "dotenv";
dotenv.config();
const PORT: number = parseInt(process.env.PORT) || 9000;
// MIDDLEWARES
app.use(checkDbFile);
app.use(express.json({}));
app.use(errorHandler);
// RUN ROUTERS
appRouters(app);
app.listen(PORT, () => {
  console.log(`App is running on link http://localhost:${PORT}`);
});
