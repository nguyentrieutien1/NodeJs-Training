import cartController from "../controllers/cart.controller";
import { catchErrorHandler } from "../middlewares/error.catch.middleware";

const router = require("express").Router();
router.get("/cart", catchErrorHandler(cartController.findAll));
router.get("/cart/:id", catchErrorHandler(cartController.findOneById));
router.post("/cart", catchErrorHandler(cartController.create));
router.put("/cart/:id", catchErrorHandler(cartController.findOneAndUpdate));
router.delete("/cart/:id", catchErrorHandler(cartController.findOneAndDelete));
export = router;
