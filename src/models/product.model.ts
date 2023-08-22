class ProductModel {
  id: number;
  image: string;
  product_name: string;
  product_title: string;
  product_price: number;
  constructor(
    id: number,
    image: string,
    product_name: string,
    product_title: string,
    product_price: number
  ) {
    this.id = id;
    this.image = image;
    this.product_name = product_name;
    this.product_title = product_title;
    this.product_price = product_price;
  }
}
export { ProductModel };
