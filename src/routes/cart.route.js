const router = require("express").Router();
const CartController = require("../controllers/cart.controller");
router.get("/", CartController.findAll);
router.get("/:id", CartController.findOneById);
router.post("/", CartController.create);
router.put("/:id", CartController.findOneAndUpdate);
router.delete("/:id", CartController.findOneAndDelete);
module.exports = router;
