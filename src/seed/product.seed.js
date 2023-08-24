const { mongoDbInstance } = require("../configs/db");
const { products } = require("../database/products.json");
const { Product } = require("../models/product.model");
require("dotenv").config();
// hdahsdsadasdasdasd
(async () => {
  await mongoDbInstance.connect();
  const getAllProduct = await Produc
  if (getAllProduct.length > 0) {
    return void 0;
  }
  for (let i = 0; i < products.length; i++) {
    await Product.create(products[i]);
  }
  console.log("Write the data to product collection successfull !");
})();
