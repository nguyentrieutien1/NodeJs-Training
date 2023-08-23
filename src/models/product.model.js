const { getProductDbData } = require( "../helpers/get_data_db");

class ProductModel {
   
    constructor(
      id,
      image,
      product_name,
      product_title,
      product_price
    ) {
      this.id = id;
      this.image = image;
      this.product_name = product_name;
      this.product_title = product_title;
      this.product_price = product_price;
    }
    static findAll = async () => {
        const {products} = await getProductDbData();
        return products;
    }
  }
  module.exports = {
    ProductModel
  }