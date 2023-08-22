import { FETCH_TIME_OUT } from "../contains/fetch_time_out";
import { getDbData } from "../helpers/get_data_db";
import { sleep } from "../helpers/sleep";
import { BadRequestError, NotFound } from "../core/error.response";
import { saveDbData } from "../helpers/save_data_db";
import { v4 as uuidv4 } from "uuid";
import { Item } from "../types/item.type";

class Product {
  findAll = async (): Promise<Item[]> => {
    const products: Item[] = await getDbData();
    await sleep(FETCH_TIME_OUT);
    return products;
  };

  create = async ({ payload }: { payload: Item }): Promise<Item> => {
    if (!payload) {
      throw new BadRequestError("Dont't have payload");
    }
    const { products }: { products: Item[] } = await getDbData();
    payload.id = uuidv4();
    products.push(payload);
    await sleep(FETCH_TIME_OUT);
    saveDbData({ products });
    return payload;
  };

  findOneById = async ({ id }: { id: number }): Promise<Item> => {
    if (!id) throw new BadRequestError("Missing product id");
    const { products }: { products: Item[] } = await getDbData();
    const product: Item = products.find((product: Item) => product.id == id);
    if (!product) throw new NotFound("Product not found !");
    await sleep(FETCH_TIME_OUT);
    return product;
  };

  findOneAndUpdate = async ({
    id,
    payload,
  }: {
    id: number;
    payload: Item;
  }): Promise<Item> => {
    if (id || !payload) throw new BadRequestError("Missing user id or payload");
    const { products } = await getDbData();
    const index = products.findIndex((product: any) => product.id === id);
    products[index] = { ...products[index], ...payload };
    saveDbData({ products });
    await sleep(FETCH_TIME_OUT);
    return products[index];
  };

  findOneAndDelete = async ({ id }: { id: number }) => {
    if (!id) throw new BadRequestError("Missing user id or payload");
    const { products } = await getDbData();
    const index: number = products.findIndex((product: Item) => product.id === id);
    if (index === -1) throw new NotFound("Product not found !");
    products.splice(index, 1);
    await sleep(FETCH_TIME_OUT);
    saveDbData({ products });
    return 1;
  };
}

export default new Product();
