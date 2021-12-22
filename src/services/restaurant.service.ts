import { HttpException } from "@exceptions/HttpException";
import { Restaurant } from "@interfaces/restaurant.interface";
import restaurantModel from "@models/restaurant.model";
import { isEmpty } from "@utils/util";

class RestaurantService {
  public restaurant = restaurantModel;

  public async findAllRestaurant(): Promise<Restaurant[]> {
    const restaurants: Restaurant[] = await this.restaurant.find();
    return restaurants;
  }

  public async findRestaurantById(restaurantId: string): Promise<Restaurant> {
    if (isEmpty(restaurantId))
      throw new HttpException(400, "restaurantId required");

    const restaurant: Restaurant = await this.restaurant.findOne({
      _id: restaurantId,
    });
    if (!restaurant) throw new HttpException(404, "restaurant not found");

    return restaurant;
  }

  public async createRestaurant(
    restaurantData: Restaurant
  ): Promise<Restaurant> {
    if (isEmpty(restaurantData))
      throw new HttpException(400, "restaurantData required");

    const findRestaurant: Restaurant = await this.restaurant.findOne({
      name: restaurantData.name,
    });
    if (findRestaurant)
      throw new HttpException(
        409,
        `restaurant name '${restaurantData.name}' already exists`
      );

    const restaurant: Restaurant = await this.restaurant.create(restaurantData);

    return restaurant;
  }

  public async updateRestaurant(
    restaurantId: string,
    restaurantData: Restaurant
  ): Promise<Restaurant> {
    if (isEmpty(restaurantData))
      throw new HttpException(400, "restaurantData required");

    if (restaurantData.name) {
      const findRestaurant: Restaurant = await this.restaurant.findOne({
        name: restaurantData.name,
      });
      if (findRestaurant && findRestaurant._id != restaurantId)
        throw new HttpException(
          409,
          `restaurant name '${restaurantData.name}' already exists`
        );
    }

    const restaurant: Restaurant = await this.restaurant.findByIdAndUpdate(
      restaurantId,
      restaurantData,
      {
        new: true,
      }
    );
    if (!restaurant) throw new HttpException(404, "restaurant not found");

    return restaurant;
  }

  public async deleteRestaurant(restaurantId: string): Promise<Restaurant> {
    const restaurant: Restaurant = await this.restaurant.findByIdAndDelete(
      restaurantId
    );
    if (!restaurant) throw new HttpException(404, "restaurant not found");

    return restaurant;
  }
}

export default RestaurantService;
