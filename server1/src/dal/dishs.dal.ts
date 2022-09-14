import Dishs from "../db/models/dishs";

export class DishsDal {

    public createDish(dish: any) {
          dish = new Dishs({
          pictureURL: dish.pictureURL,
          name: dish.name,
          description: dish.description,
          restaurants: dish.restaurants,
          price: dish.price,
          category: dish.category,
        });

        dish.save(function (err: any, results: any) {
          return results;
        });
    }

    public async updateDish(dish:any) {
      const data = await Dishs.findOne({
        name: dish.name,
      }).updateOne({$set: {age: dish.age,},})
        return data
      }


    public findAll(query: any = null) {
        return Dishs.find(query);
      }
}


