import { Request, Response } from "express";
import { Ok, Success } from "../core/success.response";
import cartService from "../services/cart.service";
import { Item } from "../types/item.type";
import { IdParams } from "../types/params.type";
class CartController {
  findAll = async (req: Request, res: Response): Promise<Item[]> => {
    const products: Item[] = await cartService.findAll();
    return new Ok({
      metadata: products,
      message: "Get all cart item successful !",
    }).send(res);
  };
  create = async (req: Request, res: Response): Promise<Success> => {
    const { payload }: { payload: Item } = req.body;
    const product: Item = await cartService.create({ payload });
    return new Success({
      message: "cart item has been created !",
      metadata: product,
    }).send(res);
  };
  findOneById = async (req: Request, res: Response): Promise<Ok> => {
    const { id } = req.params as unknown as IdParams;
    const product: Item = await cartService.findOneById({ id });
    return new Ok({ metadata: product, message: null }).send(res);
  };
  findOneAndUpdate = async (req: Request, res: Response): Promise<Ok> => {
    const { id } = req.params as unknown as IdParams;
    const { payload }: { payload: Item } = req.body;
    const product = await cartService.findOneAndUpdate({
      id: id,
      payload,
    });
    return new Ok({
      metadata: product,
      message: "Update cart item successful !",
    }).send(res);
  };
  findOneAndDelete = async (req: Request, res: Response): Promise<Ok> => {
    const { id } = req.params as unknown as { id: number };
    await cartService.findOneAndDelete({ id });
    return new Ok({
      message: "Delete cart item successful !",
      metadata: null,
    }).send(res);
  };
}
export default new CartController();
