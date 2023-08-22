import { Request, Response } from "express";
import { Ok, Success } from "../core/success.response";
import cartService from "../services/cart.service";
import { Item } from "../types/item.type";
import { IdParams } from "../types/params.type";
import { CartModel } from "../models/cart.model";
class CartController {
  findAll = async (req: Request, res: Response): Promise<CartModel[]> => {
    const cart: CartModel[] = await cartService.findAll();
    return new Ok({
      metadata: cart,
      message: "Get all cart item successful !",
    }).send(res);
  };
  create = async (req: Request, res: Response): Promise<any> => {
    const payload: CartModel = req.body;
    const cart: CartModel = await cartService.create({ payload });
    return new Success({
      message: "cart item has been created !",
      metadata: cart,
    }).send(res);
  };
  findOneById = async (req: Request, res: Response): Promise<Ok> => {
    const { id } = req.params as unknown as IdParams;
    const cart: CartModel = await cartService.findOneById({ id });
    return new Ok({ metadata: cart, message: null }).send(res);
  };
  findOneAndUpdate = async (req: Request, res: Response): Promise<Ok> => {
    const { id } = req.params;
    const { quantity } = req.body;
    const cart = await cartService.findOneAndUpdate({
      id: parseInt(id),
      quantity,
    });
    return new Ok({
      metadata: cart,
      message: "Update cart item successful !",
    }).send(res);
  };
  findOneAndDelete = async (req: Request, res: Response): Promise<Ok> => {
    const { id } = req.params;
    await cartService.findOneAndDelete({ id: parseInt(id) });
    return new Ok({
      message: "Delete cart item successful !",
      metadata: null,
    }).send(res);
  };
}
export default new CartController();
