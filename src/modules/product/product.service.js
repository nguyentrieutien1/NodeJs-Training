const { ProductModel, Product } = require("./product.model");

class ProductService {
  findAll = async () => {
    const products = await Product.find();
    return products;
  };
}
const productService = new ProductService();
module.exports = productService;
