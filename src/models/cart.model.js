const { FETCH_TIME_OUT } = require("../contains/fetch_time_out");
const { BadRequestError, NotFound } = require("../core/error.response");
const { getCartDbData } = require("../helpers/get_data_db");
const {  saveCartDbData } = require("../helpers/save_data_db");
const { sleep } = require("../helpers/sleep");

class CartModel {
  constructor({ id, quantity }) {
    this.id = id;
    this.quantity = quantity;
  }
  static findAll = async () => {
    const cart = await getCartDbData();
    await sleep(FETCH_TIME_OUT);
    return cart;
  };

  save = async () => {
    if (!this.id || !this.quantity) {
      throw new BadRequestError("Dont't have payload");
    }
    const { cart } = await getCartDbData();
    cart.push(this);
    await sleep(FETCH_TIME_OUT);
    saveCartDbData({ cart });
    return this;
  };

  static findOneById = async ({ id }) => {
    const { cart } = await getCartDbData();
    const cartItem = cart.find((cartItem) => cartItem.id == id);
    if (!cartItem) throw new NotFound("Cart item not found !");
    await sleep(FETCH_TIME_OUT);
    return cartItem;
  };

  static findOneAndUpdate = async ({ id, payload }) => {
    const { cart } = await getCartDbData();
    const index = cart.findIndex((cartItem) => cartItem.id == id);
    console.log(index);
    cart[index].quantity = payload.quantity;
    await sleep(FETCH_TIME_OUT);
    saveCartDbData({ cart });
    return cart[index];
  };

  static findOneAndDelete = async ({ id }) => {
    const { cart } = await getCartDbData();
    console.log(id);
    const index = cart.findIndex((product) => product.id == id);
    if (index === -1) throw new NotFound("cart item not found !");
    cart.splice(index, 1);
    await sleep(FETCH_TIME_OUT);
    saveCartDbData({ cart });
    return 1;
  };
}
module.exports = { CartModel };
