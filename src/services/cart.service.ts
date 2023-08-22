import { FETCH_TIME_OUT } from "../contains/fetch_time_out";
import { getCartDbData } from "../helpers/get_data_db";
import { sleep } from "../helpers/sleep";
import { BadRequestError, NotFound } from "../core/error.response";
import { saveDbData } from "../helpers/save_data_db";
import { v4 as uuidv4 } from "uuid";
import { Item } from "../types/item.type";
import { CartModel } from "../models/cart.model";

class CartService {
  findAll = async (): Promise<CartModel[]> => {
    const cart: CartModel[] = await CartModel.findAll();
    await sleep(FETCH_TIME_OUT);
    return cart;
  };

  create = async ({ payload }: { payload: CartModel }): Promise<CartModel> => {
    const cartItem: CartModel = await new CartModel(payload);
    const cartInstance = await cartItem.save();
    return cartInstance;

  };

  findOneById = async ({ id }: { id: number }): Promise<CartModel> => {
    if (!id) throw new BadRequestError("Missing cart item id");
    const { cart }: { cart: CartModel[] } = await getCartDbData();
    const product: CartModel = cart.find(
      (product: CartModel) => product.id == id
    );
    if (!product) throw new NotFound("Cart item not found !");
    await sleep(FETCH_TIME_OUT);
    return product;
  };

  findOneAndUpdate = async ({
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

  findOneAndDelete = async ({ id }: { id: number }) => {
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

export default new CartService();
