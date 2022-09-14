import { Request, Response } from "express";
import { DishsService } from "../services/dishs.service";

export class DishsController {
    
public static async getDishs(req: Request, res: Response) {
        const service = new DishsService();
        const Dish = await service.getDish();
        return res.send(Dish);
};
public static async createDishs(req: Request, res: Response) {
        const params = req.body;
        const service = new DishsService();
        const Dish = await service.createDish(params);
        return res.send(Dish);
};
};