const { Product } = require("../models/product.model");

class ProductService {
  findAll = async () => {
    const products = await Product.find();
    console.log(products);
    return products;
  };
}
const productService = new ProductService();
module.exports = productService;
