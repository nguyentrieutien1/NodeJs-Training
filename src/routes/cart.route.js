const { catchErrorHandler } = require("../middlewares/error.catch.middleware");
const router = require("express").Router();
const CartController = require("../controllers/cart.controller");
router.get("/cart", catchErrorHandler(CartController.findAll));
router.get("/cart/:id", catchErrorHandler(CartController.findOneById));
router.post("/cart", catchErrorHandler(CartController.create));
router.put("/cart/:id", catchErrorHandler(CartController.findOneAndUpdate));
router.delete("/cart/:id", catchErrorHandler(CartController.findOneAndDelete));
module.exports = router;
