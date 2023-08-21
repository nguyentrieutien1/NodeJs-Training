const {Ok, Success} = require("../core/success.response");
const productService = require("../services/product.service");
class Product {
  findAll = async (req, res) => {
    const products = await productService.findAll();
    return new Ok({
      metadata: products,
      message: "Get all product successful !",
    }).send(res);
  };
  create = async (req, res) => {
    const { payload } = req.body;
    const product = await productService.create({ payload });
    return new Success({
      message: "Product has been created !",
      metadata: product,
    }).send(res);
  };
  findOneById = async (req, res) => {
    const { id } = req.params;
    const product = await productService.findOneById({ id });
    return new Ok({ metadata: product }).send(res);
  };
  findOneAndUpdate = async (req, res) => {
    const { id } = req.params;
    const { payload } = req.body;
    const product = await productService.findOneAndUpdate({
      id,
      payload,
    });
    return new Ok({
      metadata: product,
      message: "Update product successful !",
    }).send(res);
  };
  findOneAndDelete = async (req, res) => {
    const { id } = req.params;
    await productService.findOneAndDelete({ id });
    return new Ok({ message: "Delete product successful !" }).send(res);
  };
}
module.exports = new Product();