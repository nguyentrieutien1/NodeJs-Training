const { catchErrorHandler } = require("../middlewares/error.catch.middleware");
const router = require("express").Router();
const ProductController = require("../controllers/product.controller");
router.get("/products", catchErrorHandler(ProductController.findAll));
router.get("/product/:id", catchErrorHandler(ProductController.findOneById));
router.post("/product", catchErrorHandler(ProductController.create));
router.put(
  "/product/:id",
  catchErrorHandler(ProductController.findOneAndUpdate)
);
router.delete(
  "/product/:id",
  catchErrorHandler(ProductController.findOneAndDelete)
);
export = router;
