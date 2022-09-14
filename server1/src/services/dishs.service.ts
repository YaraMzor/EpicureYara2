import { DishsDal } from "../dal/dishs.dal";

export class DishsService {

public async getDish() {
    const dal = new DishsDal();
    const res = await dal.findAll();
    return res;
};
public async createDish(dish:any) {
    const dal = new DishsDal();
    const res = dal.createDish(dish);
    return res;
};
};