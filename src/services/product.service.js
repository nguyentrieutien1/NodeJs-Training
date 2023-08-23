const { ProductModel } = require("../models/product.model");

class ProductService {
  findAll = async () => {
    const products = await ProductModel.findAll();
    return products
  };
}
const productService = new ProductService();
module.exports = productService
