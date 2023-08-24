const { BadRequestError } = require("../core/error.response");
const { CartModel } = require("../models/cart.model");
class CartService {
  findAll = async () => {
    const { cart } = await CartModel.findAll();
    return cart;
  };
  create = async ({ payload }) => {
    if (!payload) {
      throw new BadRequestError("Dont't have payload", { payload });
    }

    const cartItem = new CartModel(payload);
    await cartItem.save();
    return payload;
  };
  findOneById = async ({ id }) => {
    if (!id) throw new BadRequestError("Missing cart item id", { id });
    const cart = await CartModel.findOneById({ id });
    return cart;
  };
  findOneAndUpdate = async ({ id, payload }) => {
    if (!id || !payload)
      throw new BadRequestError("Missing cart item or payload", {
        id,
        payload,
      });
    const cart = await CartModel.findOneAndUpdate({ id, payload });
    return cart;
  };
  findOneAndDelete = async ({ id }) => {
    if (!id)
      throw new BadRequestError("Missing cart item  id or payload", { id });
    await CartModel.findOneAndDelete({ id });
    return 1;
  };
}
module.exports = new CartService();
