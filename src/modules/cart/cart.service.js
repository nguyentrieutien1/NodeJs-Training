const { FETCH_TIME_OUT } = require("../../contains/fetchTimeout");
const { getDbData } = require("../../helpers/getDataDb");
const { sleep } = require("../../helpers/sleep");
const { BadRequestError, NotFound } = require("../../core/error.response");
const { Cart } = require("./cart.model");
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
    const cartItem = await Cart.findOne({ id: id });
    if (!cartItem) throw new NotFound("Cart item not found !", { id });
    return cartItem;
  };
  findOneAndUpdate = async ({ id, payload }) => {
    if (!id || !payload)
      throw new BadRequestError("Missing cart item or payload !", {
        id,
        payload,
      });
    const cartItem = await Cart.findOneAndUpdate({ id }, payload);
    console.log(cartItem);
    return cartItem;
  };
  findOneAndDelete = async ({ id }) => {
    if (!id)
      throw new BadRequestError("Missing cart item  id or payload !", { id });
    await Cart.findOneAndDelete({ id: id });
    return 1;
  };
}
module.exports = new CartService();
