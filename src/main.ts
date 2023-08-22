import express from "express";
import { errorHandler } from "./middlewares/error.middleware";
import "./database/db.json";
const app = express();
import { checkDbFile } from "./middlewares/check.db";
import appRouters from "./routes/index.route";
import dotenv from "dotenv";
import { mongoInstance } from "./configs/db";
import "./configs/db";
import { Cart } from "./models/cart.model";
dotenv.config();
const PORT: number = parseInt(process.env.PORT) || 9000;
// MIDDLEWARES
app.use(checkDbFile);
app.use(express.json({}));

// CONNECT DB
mongoInstance.connect();

// RUN ROUTERS
appRouters(app);

// HANDLE APP ERROR
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`App is running on link http://localhost:${PORT}`);
});
