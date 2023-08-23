const { Ok } = require("../core/success.response");
const productService = require("../services/product.service");
class ProductController {
  findAll = async (req, res) => {
    const products = await productService.findAll();
    return new Ok({
      metadata: products,
      message: "Get all product successful !",
    }).send(res);
  };
 
}
module.exports = new ProductController();
