import productController from "../controllers/product.controller";
import { catchErrorHandler } from "../middlewares/error.catch.middleware";

const router = require("express").Router();
router.get("/products", catchErrorHandler(productController.findAll));
router.get("/product/:id", catchErrorHandler(productController.findOneById));
router.post("/product", catchErrorHandler(productController.create));
router.put(
  "/product/:id",
  catchErrorHandler(productController.findOneAndUpdate)
);
router.delete(
  "/product/:id",
  catchErrorHandler(productController.findOneAndDelete)
);
export = router;
