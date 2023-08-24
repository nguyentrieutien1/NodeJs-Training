const { Ok, Success } = require("../core/success.response");
const { errorHandler } = require("../helpers/handleError");
const cartService = require("../services/cart.service");
class CartController {
  findAll = async (req, res) => {
    try {
      const products = await cartService.findAll();
      return new Ok({
        data: products,
        message: "Get all product successful !",
      }).send(res);
    } catch (error) {
      errorHandler(error, res);
    }
  };
  create = async (req, res) => {
    try {
      const payload = req.body;
      const product = await cartService.create({ payload });
      return new Success({
        message: "Product has been created !",
        data: product,
      }).send(res);
    } catch (error) {
      errorHandler(error, res);
    }
  };
  findOneById = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await cartService.findOneById({ id });
      return new Ok({ data: product }).send(res);
    } catch (error) {
      errorHandler(error, res);
    }
  };
  findOneAndUpdate = async (req, res) => {
    try {
      const { id } = req.params;
      const payload = req.body;
      const product = await cartService.findOneAndUpdate({
        id,
        payload,
      });
      return new Ok({
        data: product,
        message: "Update product successful !",
      }).send(res);
    } catch (error) {
      errorHandler(error, res);
    }
  };
  findOneAndDelete = async (req, res) => {
    try {
      const { id } = req.params;
      await cartService.findOneAndDelete({ id });
      return new Ok({ message: "Delete product successful !" }).send(res);
    } catch (error) {
      errorHandler(error, res);
    }
  };
}
module.exports = new CartController();
