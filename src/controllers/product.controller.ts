import { Request, Response } from "express";
import { Ok, Success } from "../core/success.response";
import productService from "./../services/product.service";
import { Item } from "../types/item.type";
import { IdParams } from "../types/params.type";
class ProductController {
  findAll = async (req: Request, res: Response): Promise<Item[]> => {
    const products: Item[] = await productService.findAll();
    return new Ok({
      metadata: products,
      message: "Get all product successful !",
    }).send(res);
  };
  create = async (req: Request, res: Response): Promise<Success> => {
    const { payload }: { payload: Item } = req.body;
    const product: Item = await productService.create({ payload });
    return new Success({
      message: "Product has been created !",
      metadata: product,
    }).send(res);
  };
  findOneById = async (req: Request, res: Response): Promise<Ok> => {
    const { id } = req.params as unknown as IdParams;
    const product: Item = await productService.findOneById({ id });
    return new Ok({ metadata: product, message: null }).send(res);
  };
  findOneAndUpdate = async (req: Request, res: Response): Promise<Ok> => {
    const { id } = req.params as unknown as IdParams;
    const { payload }: { payload: Item } = req.body;
    const product = await productService.findOneAndUpdate({
      id: id,
      payload,
    });
    return new Ok({
      metadata: product,
      message: "Update product successful !",
    }).send(res);
  };
  findOneAndDelete = async (req: Request, res: Response): Promise<Ok> => {
    const { id } = req.params as unknown as { id: number };
    await productService.findOneAndDelete({ id });
    return new Ok({
      message: "Delete product successful !",
      metadata: null,
    }).send(res);
  };
}
export default new ProductController();
