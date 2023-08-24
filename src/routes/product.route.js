const { catchErrorHandler } = require("../middlewares/error.catch.middleware");
const router = require("express").Router();
const productController = require("../controllers/product.controller");
router.get("/", catchErrorHandler(productController.findAll));
module.exports = router;
