const { FETCH_TIME_OUT } = require("../contains/fetch_time_out");
const { getDbData } = require("../helpers/get_data_db");
const { sleep } = require("../helpers/sleep");
const { BadRequestError, NotFound } = require("../core/error.response");
const { saveDbData } = require("../helpers/save_data_db");
const { v4: uuidv4 } = require("uuid");
class Product {
  findAll = async () => {
    const { products } = await getDbData();
    await sleep(FETCH_TIME_OUT);
    return products;
  };
  create = async ({ payload }) => {
    if (!payload) {
      throw new BadRequestError("Dont't have payload");
    }
    const { products } = await getDbData();
    payload._id = uuidv4();
    products.push(payload);
    await sleep(FETCH_TIME_OUT);
    saveDbData({ products });
    return payload;
  };
  findOneById = async ({ id }) => {
    if (!id) throw new BadRequestError("Missing user id");
    const { products } = await getDbData();
    const product = products.find((product) => product.id == id);
    if (!product) throw new NotFound("Product not found !");
    await sleep(FETCH_TIME_OUT);
    return product;
  };
  findOneAndUpdate = async ({ id, payload }) => {
    if (!id || !payload)
      throw new BadRequestError("Missing user id or payload");
    const { products } = await getDbData();
    const index = products.findIndex((product) => product.id == id);
    products[index] = { ...products[index], ...payload };
    saveDbData({ products });
    sleep(FETCH_TIME_OUT);
    return products[index];
  };
  findOneAndDelete = async ({ id }) => {
    if (!id) throw new BadRequestError("Missing user id or payload");
    const { products } = await getDbData();
    const index = products.findIndex((product) => product.id == id);
    if (index === -1) throw new NotFound("Product not found !");
    products.splice(index, 1);
    await sleep(FETCH_TIME_OUT);
    saveDbData({ products });
    return 1;
  };
}
module.exports = new Product();
