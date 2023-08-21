import { Request, Response } from "express";
import { Ok, Success } from "../core/success.response";
import productService from "./../services/product.service";
class ProductController {
  findAll = async (req: Request, res: Response) => {
    const products = await productService.findAll();
    return new Ok({
      metadata: products,
      message: "Get all product successful !",
    }).send(res);
  };
  create = async (req: Request, res: Response) => {
    const { payload } = req.body;
    const product = await productService.create({ payload });
    return new Success({
      message: "Product has been created !",
      metadata: product,
    }).send(res);
  };
  findOneById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await productService.findOneById({ _id: id });
    return new Ok({ metadata: product, message: null }).send(res);
  };
  findOneAndUpdate = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { payload } = req.body;
    const product = await productService.findOneAndUpdate({
      _id: id,
      payload,
    });
    return new Ok({
      metadata: product,
      message: "Update product successful !",
    }).send(res);
  };
  findOneAndDelete = async (req: Request, res: Response) => {
    const { id } = req.params;
    await productService.findOneAndDelete({ _id: id });
    return new Ok({
      message: "Delete product successful !",
      metadata: null,
    }).send(res);
  };
}
export default new ProductController();
