import { FETCH_TIME_OUT } from "../contains/fetch_time_out";
import { getDbData } from "../helpers/get_data_db";
import { sleep } from "../helpers/sleep";
import { BadRequestError, NotFound } from "../core/error.response";
import { saveDbData } from "../helpers/save_data_db";
import { v4 as uuidv4 } from "uuid";

class Product {
  findAll = async () => {
    const products = await getDbData();
    await sleep(FETCH_TIME_OUT);
    return products;
  };

  create = async (payload: any) => {
    if (!payload.payload) {
      throw new BadRequestError("Dont't have payload");
    }
    const { products } = await getDbData();
    payload._id = uuidv4();
    products.push(payload);
    await sleep(FETCH_TIME_OUT);
    saveDbData({ products });
    return payload;
  };

  findOneById = async (_id: any) => {
    if (!_id._id) throw new BadRequestError("Missing user id");
    const { products } = await getDbData();
    const product = products.find((product: any) => product._id == _id);
    if (!product) throw new NotFound("Product not found !");
    await sleep(FETCH_TIME_OUT);
    return product;
  };

  findOneAndUpdate = async (xxx: any) => {
    if (!xxx._id || !xxx.payload)
      throw new BadRequestError("Missing user id or payload");
    const { products } = await getDbData();
    const index = products.findIndex((product: any) => product._id === xxx._id);
    products[index] = { ...products[index], ...xxx.payload };
    saveDbData({ products });
    await sleep(FETCH_TIME_OUT);
    return products[index];
  };

  findOneAndDelete = async (id: any) => {
    if (!id._id) throw new BadRequestError("Missing user id or payload");
    const { products } = await getDbData();
    const index = products.findIndex((product: any) => product._id === id._id);
    if (index === -1) throw new NotFound("Product not found !");
    products.splice(index, 1);
    await sleep(FETCH_TIME_OUT);
    saveDbData({ products });
    return 1;
  };
}

export default new Product();
