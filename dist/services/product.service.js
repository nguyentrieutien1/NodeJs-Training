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
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_time_out_1 = require("../contains/fetch_time_out");
const get_data_db_1 = require("../helpers/get_data_db");
const sleep_1 = require("../helpers/sleep");
const error_response_1 = require("../core/error.response");
const save_data_db_1 = require("../helpers/save_data_db");
const uuid_1 = require("uuid");
class Product {
    constructor() {
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const products = yield (0, get_data_db_1.getDbData)();
            yield (0, sleep_1.sleep)(fetch_time_out_1.FETCH_TIME_OUT);
            return products;
        });
        this.create = (payload) => __awaiter(this, void 0, void 0, function* () {
            if (!payload.payload) {
                throw new error_response_1.BadRequestError("Dont't have payload");
            }
            const { products } = yield (0, get_data_db_1.getDbData)();
            payload._id = (0, uuid_1.v4)();
            products.push(payload);
            yield (0, sleep_1.sleep)(fetch_time_out_1.FETCH_TIME_OUT);
            (0, save_data_db_1.saveDbData)({ products });
            return payload;
        });
        this.findOneById = (_id) => __awaiter(this, void 0, void 0, function* () {
            if (!_id._id)
                throw new error_response_1.BadRequestError("Missing user id");
            const { products } = yield (0, get_data_db_1.getDbData)();
            const product = products.find((product) => product._id == _id);
            if (!product)
                throw new error_response_1.NotFound("Product not found !");
            yield (0, sleep_1.sleep)(fetch_time_out_1.FETCH_TIME_OUT);
            return product;
        });
        this.findOneAndUpdate = (xxx) => __awaiter(this, void 0, void 0, function* () {
            if (!xxx._id || !xxx.payload)
                throw new error_response_1.BadRequestError("Missing user id or payload");
            const { products } = yield (0, get_data_db_1.getDbData)();
            const index = products.findIndex((product) => product._id === xxx._id);
            products[index] = Object.assign(Object.assign({}, products[index]), xxx.payload);
            (0, save_data_db_1.saveDbData)({ products });
            yield (0, sleep_1.sleep)(fetch_time_out_1.FETCH_TIME_OUT);
            return products[index];
        });
        this.findOneAndDelete = (id) => __awaiter(this, void 0, void 0, function* () {
            if (!id._id)
                throw new error_response_1.BadRequestError("Missing user id or payload");
            const { products } = yield (0, get_data_db_1.getDbData)();
            const index = products.findIndex((product) => product._id === id._id);
            if (index === -1)
                throw new error_response_1.NotFound("Product not found !");
            products.splice(index, 1);
            yield (0, sleep_1.sleep)(fetch_time_out_1.FETCH_TIME_OUT);
            (0, save_data_db_1.saveDbData)({ products });
            return 1;
        });
    }
}
exports.default = new Product();
