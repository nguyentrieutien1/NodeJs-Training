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
const cart_service_1 = __importDefault(require("../services/cart.service"));
class CartController {
    constructor() {
        this.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const cart = yield cart_service_1.default.findAll();
            return new success_response_1.Ok({
                metadata: cart,
                message: "Get all cart item successful !",
            }).send(res);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const payload = req.body;
            const cart = yield cart_service_1.default.create({ payload });
            return new success_response_1.Success({
                message: "cart item has been created !",
                metadata: cart,
            }).send(res);
        });
        this.findOneById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cart = yield cart_service_1.default.findOneById({ id });
            return new success_response_1.Ok({ metadata: cart, message: null }).send(res);
        });
        this.findOneAndUpdate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { payload } = req.body;
            const cart = yield cart_service_1.default.findOneAndUpdate({
                id: id,
                payload,
            });
            return new success_response_1.Ok({
                metadata: cart,
                message: "Update cart item successful !",
            }).send(res);
        });
        this.findOneAndDelete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield cart_service_1.default.findOneAndDelete({ id });
            return new success_response_1.Ok({
                message: "Delete cart item successful !",
                metadata: null,
            }).send(res);
        });
    }
}
exports.default = new CartController();
