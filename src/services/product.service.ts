import { getProductDbData } from "../helpers/get_data_db";
import { ProductModel } from "../models/product.model";

class ProductService {
  findAll = async (): Promise<ProductModel[]> => {
    const products: ProductModel[] = [];
    return products;
  };
}
const productService = new ProductService();
export { productService };
