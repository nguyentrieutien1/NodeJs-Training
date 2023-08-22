const { FETCH_TIME_OUT } = require("../contains/fetch_time_out");
const { BadRequestError, NotFound } = require("../core/error.response");
const { getCartDbData } = require("../helpers/get_data_db");
const { saveDbData } = require("../helpers/save_data_db");
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
    saveDbData({ cart });
    return this;
  };

  static findOneById = async ({ id }) => {
    if (!id) throw new BadRequestError("Missing cart item id");
    const { cart } = await getCartDbData();
    const product = cart.find((product) => product.id == id);
    if (!product) throw new NotFound("Cart item not found !");
    await sleep(FETCH_TIME_OUT);
    return product;
  };

  static findOneAndUpdate = async ({ id, quantity }) => {
    if (!id || !quantity)
      throw new BadRequestError("Missing cart item id or payload");
    const { cart } = await getCartDbData();
    console.log(quantity, id);

    const index = cart.findIndex((product) => product.id === id);

    cart[index] = { ...cart[index], ...{ quantity } };
    saveDbData({ cart });
    await sleep(FETCH_TIME_OUT);
    return cart[index];
  };

  static findOneAndDelete = async ({ id }) => {
    if (!id) throw new BadRequestError("Missing cart item or payload");
    const { cart } = await getCartDbData();
    const index = cart.findIndex((product) => product.id === id);
    if (index === -1) throw new NotFound("cart item not found !");
    cart.splice(index, 1);
    await sleep(FETCH_TIME_OUT);
    saveDbData({ cart });
    return 1;
  };
}
module.exports = { CartModel };
