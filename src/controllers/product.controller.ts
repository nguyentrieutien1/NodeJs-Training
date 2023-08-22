import { Ok } from "../core/success.response";
import { ProductModel } from "../models/product.model";
import { productService } from "../services/product.service";

class ProductController {
  findAll = async () => {
    console.log("hehehe");
    //     const products: ProductModel[] = await productService.findAll();
    //     return new Ok({
    //       metadata: products,
    //       message: "Get all products succesful ",
    //     });
  };
}
const productController = new ProductController();
export { productController };
