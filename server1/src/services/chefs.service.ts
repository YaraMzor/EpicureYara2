import { ChefsDal } from "../dal/chefs.dal";

export class ChefsService {

    // public static async getChefs(){
    //     const chefs = ChefsDal.getChefs();
    //    return chefs;
    // }

    // public async getChefs(param:any) {
    //     const dal = new ChefsDal();
    //     const res = await dal.findAll(param);
    //     return res;
    // };
    public async getChefs() {
        const dal = new ChefsDal();
        const res = await dal.findAll();
        return res;
    };
    public async createChef(chef:any) {
        const dal = new ChefsDal();
        const res = dal.createChef(chef);
        return res;
    };
};