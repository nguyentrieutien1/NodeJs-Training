const { FETCH_TIME_OUT } = require("../contains/fetch_time_out");
const { getDbData } = require("../helpers/get_data_db");
const { sleep } = require("../helpers/sleep");
const { BadRequestError, NotFound } = require("../core/error.response");
const { saveDbData } = require("../helpers/save_data_db");
const { v4: uuidv4 } = require("uuid");
const { CartModel } = require("../models/cart.model");
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
    const { cart } = await getDbData();
    payload._id = uuidv4();
    cart.push(payload);
    await sleep(FETCH_TIME_OUT);
    saveDbData({ cart });
    return payload;
  };
  findOneById = async ({ id }) => {
    if (!id) throw new BadRequestError("Missing cart item id");
    const { cart } = await getDbData();
    const product = cart.find((product) => product.id == id);
    if (!product) throw new NotFound("cart item not found !");
    await sleep(FETCH_TIME_OUT);
    return product;
  };
  findOneAndUpdate = async ({ id, payload }) => {
    if (!id || !payload)
      throw new BadRequestError("Missing cart item or payload");
    const { cart } = await getDbData();
    const index = cart.findIndex((product) => product.id == id);
    cart[index] = { ...cart[index], ...payload };
    saveDbData({ cart });
    sleep(FETCH_TIME_OUT);
    return cart[index];
  };
  findOneAndDelete = async ({ id }) => {
    if (!id) throw new BadRequestError("Missing cart item  id or payload");
    const { cart } = await getDbData();
    const index = cart.findIndex((product) => product.id == id);
    if (index === -1) throw new NotFound("cart item  not found !");
    cart.splice(index, 1);
    await sleep(FETCH_TIME_OUT);
    saveDbData({ cart });
    return 1;
  };
}
module.exports = new CartService();
