const { catchErrorHandler } = require("../middlewares/error.catch.middleware");
const router = require("express").Router();
const CartController = require("../controllers/cart.controller");
router.get("/cart", CartController.findAll);
router.get("/cart/:id", CartController.findOneById);
router.post("/cart", CartController.create);
router.put("/cart/:id", CartController.findOneAndUpdate);
router.delete("/cart/:id", CartController.findOneAndDelete);
module.exports = router;
