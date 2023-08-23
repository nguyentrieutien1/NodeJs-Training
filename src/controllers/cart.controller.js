const { Ok, Success } = require("../core/success.response");
const cartService = require("../services/cart.service");
class CartController {
  findAll = async (req, res) => {
    const products = await cartService.findAll();
    console.log(products);
    return new Ok({
      metadata: products,
      message: "Get all product successful !",
    }).send(res);
  };
  create = async (req, res) => {
    const { payload } = req.body;
    const product = await cartService.create({ payload });
    return new Success({
      message: "Product has been created !",
      metadata: product,
    }).send(res);
  };
  findOneById = async (req, res) => {
    const { id } = req.params;
    const product = await cartService.findOneById({ id });
    console.log(product);
    return new Ok({ metadata: product }).send(res);
  };
  findOneAndUpdate = async (req, res) => {
    const { id } = req.params;
    const { payload } = req.body;
    const product = await cartService.findOneAndUpdate({
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
    await cartService.findOneAndDelete({ id });
    return new Ok({ message: "Delete product successful !" }).send(res);
  };
}
module.exports = new CartController();
