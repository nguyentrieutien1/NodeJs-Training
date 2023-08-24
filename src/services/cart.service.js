const { FETCH_TIME_OUT } = require("../contains/fetch_time_out");
const { getDbData } = require("../helpers/get_data_db");
const { sleep } = require("../helpers/sleep");
const { BadRequestError, NotFound } = require("../core/error.response");
const { Cart } = require("./../models/cart.model");
class CartService {
  findAll = async () => {
    const cart = await Cart.find();
    return cart;
  };
  create = async ({ payload }) => {
    if (!payload) {
      throw new BadRequestError("Dont't have payload !", { payload });
    }
    const cartItem = await Cart.create(payload);
    return cartItem;
  };
  findOneById = async ({ id }) => {
    if (!id) throw new BadRequestError("Missing cart item id !", { id });
    const cartItem = await Cart.findById(id);
    if (!cartItem) throw new NotFound("Cart item not found !", { id });
    return cartItem;
  };
  findOneAndUpdate = async ({ id, payload }) => {
    if (!id || !payload)
      throw new BadRequestError("Missing cart item or payload !", {
        id,
        payload,
      });
    const cartItem = await Cart.findOneAndUpdate({ $where: id }, payload);
    return cartItem;
  };
  findOneAndDelete = async ({ id }) => {
    if (!id)
      throw new BadRequestError("Missing cart item  id or payload !", { id });
    await Cart.findOneAndDelete({ $where: id });
    return 1;
  };
}
module.exports = new CartService();