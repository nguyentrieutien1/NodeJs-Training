const { FETCH_TIME_OUT } = require("../contains/fetch_time_out");
const { getDbData } = require("../helpers/get_data_db");
const { sleep } = require("../helpers/sleep");
const { BadRequestError, NotFound } = require("../core/error.response");
const { saveDbData } = require("../helpers/save_data_db");
const { v4: uuidv4 } = require("uuid");
const { CartModel } = require("../models/cart.model");
const cartModel = require("../models/cart.model");
class CartService {
  findAll = async () => {
    const { cart } = await CartModel.findAll();
    await sleep(FETCH_TIME_OUT);
    return cart;
  };
  create = async ({ payload }) => {
    if (!payload) {
      throw new BadRequestError("Dont't have payload");
    }
    
    const cartItem = new CartModel(payload)
    await cartItem.save()
    return payload;
  };
  findOneById = async ({ id }) => {
    if (!id) throw new BadRequestError("Missing cart item id");
    const cart = await CartModel.findOneById({id})
    await sleep(FETCH_TIME_OUT);
    return cart;
  };
  findOneAndUpdate = async ({ id, payload }) => {
    if (!id || !payload)
      throw new BadRequestError("Missing cart item or payload");
    const cart = await CartModel.findOneAndUpdate({ id, payload });
    return cart;
  };
  findOneAndDelete = async ({ id }) => {
    if (!id) throw new BadRequestError("Missing cart item  id or payload");
    await CartModel.findOneAndDelete({ id });
    return 1;
  };
}
module.exports = new CartService();
