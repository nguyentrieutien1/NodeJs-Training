import productController from "../controllers/product.controller";
import { catchErrorHandler } from "../middlewares/error.catch.middleware";

const router = require("express").Router();
router.get("/cart", catchErrorHandler(productController.findAll));
router.get("/cart/:id", catchErrorHandler(productController.findOneById));
router.post("/cart", catchErrorHandler(productController.create));
router.put("/cart/:id", catchErrorHandler(productController.findOneAndUpdate));
router.delete(
  "/cart/:id",
  catchErrorHandler(productController.findOneAndDelete)
);
export = router;
