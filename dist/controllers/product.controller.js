"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const success_response_1 = require("../core/success.response");
const product_service_1 = __importDefault(require("./../services/product.service"));
class ProductController {
    constructor() {
        this.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const products = yield product_service_1.default.findAll();
            return new success_response_1.Ok({
                metadata: products,
                message: "Get all product successful !",
            }).send(res);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { payload } = req.body;
            const product = yield product_service_1.default.create({ payload });
            return new success_response_1.Success({
                message: "Product has been created !",
                metadata: product,
            }).send(res);
        });
        this.findOneById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const product = yield product_service_1.default.findOneById({ id });
            return new success_response_1.Ok({ metadata: product, message: null }).send(res);
        });
        this.findOneAndUpdate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { payload } = req.body;
            const product = yield product_service_1.default.findOneAndUpdate({
                id: id,
                payload,
            });
            return new success_response_1.Ok({
                metadata: product,
                message: "Update product successful !",
            }).send(res);
        });
        this.findOneAndDelete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield product_service_1.default.findOneAndDelete({ id });
            return new success_response_1.Ok({
                message: "Delete product successful !",
                metadata: null,
            }).send(res);
        });
    }
}
exports.default = new ProductController();
