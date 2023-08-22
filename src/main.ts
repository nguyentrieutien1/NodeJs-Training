import express from "express";
import { errorHandler } from "./middlewares/error.middleware";
import { checkDbFile } from "./middlewares/check.db";
import appRouters from "./routes/index.route";
import dotenv from "dotenv";
import "./database/cart.json";
import "./database/products.json";
const app = express();
const PORT: number = parseInt(process.env.PORT) || 9000;
dotenv.config();
// MIDDLEWARES
app.use(checkDbFile);
app.use(express.json({}));

// RUN ROUTERS
appRouters(app);

// CATCH APP ERROR
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`App is running on link http://localhost:${PORT}`);
});
