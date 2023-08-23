const { mongoInstance } = require("../configs/db");
const { products } = require("../database/products.json");
const { Product } = require("../models/product.model");
require("dotenv").config();
// hdahsdsadasdasdasd
(async () => {
  await mongoInstance.connect();
  for (let i = 0; i < products.length; i++) {
    await Product.create(products[i]);
  }
  console.log("Write the data to product collection successfull !");
})();
