import { productController } from "../controllers/product.controller";
import { catchErrorHandler } from "../middlewares/error.catch.middleware";

const router = require("express").Router();
router.get("/products", catchErrorHandler(productController.findAll));
export = router;
