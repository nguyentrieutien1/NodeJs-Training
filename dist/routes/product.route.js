"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const error_catch_middleware_1 = require("../middlewares/error.catch.middleware");
const router = require("express").Router();
router.get("/cart", (0, error_catch_middleware_1.catchErrorHandler)(product_controller_1.default.findAll));
router.get("/cart/:id", (0, error_catch_middleware_1.catchErrorHandler)(product_controller_1.default.findOneById));
router.post("/cart", (0, error_catch_middleware_1.catchErrorHandler)(product_controller_1.default.create));
router.put("/cart/:id", (0, error_catch_middleware_1.catchErrorHandler)(product_controller_1.default.findOneAndUpdate));
router.delete("/cart/:id", (0, error_catch_middleware_1.catchErrorHandler)(product_controller_1.default.findOneAndDelete));
module.exports = router;
