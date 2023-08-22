import { FETCH_TIME_OUT } from "../contains/fetch_time_out";
import { BadRequestError, NotFound } from "../core/error.response";
import { getCartDbData } from "../helpers/get_data_db";
import { saveDbData } from "../helpers/save_data_db";
import { sleep } from "../helpers/sleep";

class CartModel {
  id: number;
  quantity: number;
  constructor({ id, quantity }: { id: number; quantity: number }) {
    this.id = id;
    this.quantity = quantity;
  }
  static findAll = async (): Promise<CartModel[]> => {
    const cart: CartModel[] = await getCartDbData();
    await sleep(FETCH_TIME_OUT);
    return cart;
  };

  save = async (): Promise<CartModel> => {
    if (!this) {
      throw new BadRequestError("Dont't have payload");
    }
    const { cart }: { cart: CartModel[] } = await getCartDbData();
    cart.push(this);
    await sleep(FETCH_TIME_OUT);
    saveDbData({ cart });
    return this;
  };

  static findOneById = async ({ id }: { id: number }): Promise<CartModel> => {
    if (!id) throw new BadRequestError("Missing cart item id");
    const { cart }: { cart: CartModel[] } = await getCartDbData();
    const product: CartModel = cart.find(
      (product: CartModel) => product.id == id
    );
    if (!product) throw new NotFound("Cart item not found !");
    await sleep(FETCH_TIME_OUT);
    return product;
  };

  static findOneAndUpdate = async ({
    id,
    quantity,
  }: {
    id: number;
    quantity: CartModel;
  }): Promise<CartModel> => {
    if (!id || !quantity)
      throw new BadRequestError("Missing cart item id or payload");
    const { cart } = await getCartDbData();
    console.log(quantity, id);

    const index = cart.findIndex((product: any) => product.id === id);

    cart[index] = { ...cart[index], ...{ quantity } };
    saveDbData({ cart });
    await sleep(FETCH_TIME_OUT);
    return cart[index];
  };

  static findOneAndDelete = async ({ id }: { id: number }) => {
    if (!id) throw new BadRequestError("Missing cart item or payload");
    const { cart } = await getCartDbData();
    const index: number = cart.findIndex(
      (product: CartModel) => product.id === id
    );
    if (index === -1) throw new NotFound("cart item not found !");
    cart.splice(index, 1);
    await sleep(FETCH_TIME_OUT);
    saveDbData({ cart });
    return 1;
  };
}
export { CartModel };
