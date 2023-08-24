const { catchErrorHandler } = require("../middlewares/error.catch.middleware");
const router = require("express").Router();
const productController = require("../modules/product/product.controller");
router.get("/", productController.findAll);
module.exports = router;
