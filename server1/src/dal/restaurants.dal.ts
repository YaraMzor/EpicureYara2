import Chefs from "../db/models/chefs";
import Restaurants from "../db/models/restaurants";

export class RestaurantsDal {

    public async createRestaurant(restaurant: any) {
          restaurant = new Restaurants({
          pictureURL: restaurant.pictureURL,
          name: restaurant.name,
          chef: restaurant.chef,
          status:restaurant.status,
        });
        const response = await Restaurants.create(restaurant)
        const update = await Chefs.updateOne(
          {name: response.chef},
          {$inc: {__v: +0.1}},
          {
            $push: {
              restaurants: response._id
            },
          },
        );
        return {response, update};

        // restaurant.save(function (err: any, results: any) {
        //   return results;
        // });
    }

    public async updateRestaurant(restaurant:any) {
      await Restaurants.findOne({
        name: restaurant.name,
      }).updateOne({$set: {chef: restaurant.chef,}});
        const updatedRestaurants = await Restaurants.find();
        return updatedRestaurants;
    }


    public findAll() {
        return Restaurants.find();
    }
}


