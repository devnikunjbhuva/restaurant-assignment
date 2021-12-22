import { NextFunction, Request, Response } from "express";
import { Restaurant } from "@interfaces/restaurant.interface";
import restaurantService from "@services/restaurant.service";

class RestaurantController {
  public restaurantService = new restaurantService();

  public getRestaurants = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const findAllRestaurantsData: Restaurant[] =
        await this.restaurantService.findAllRestaurant();

      res.status(200).json({ data: findAllRestaurantsData, success: true });
    } catch (error) {
      next(error);
    }
  };

  public getRestaurantById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const restaurantId: string = req.params.id;
      const findOneRestaurantData: Restaurant =
        await this.restaurantService.findRestaurantById(restaurantId);

      res.status(200).json({ data: findOneRestaurantData, success: true });
    } catch (error) {
      next(error);
    }
  };

  public createRestaurant = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const restaurantData: Restaurant = req.body;
      const createRestaurantData: Restaurant =
        await this.restaurantService.createRestaurant(restaurantData);

      res.status(201).json({ data: createRestaurantData, success: true });
    } catch (error) {
      next(error);
    }
  };

  public updateRestaurant = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const restaurantId: string = req.params.id;
      const restaurantData: Restaurant = req.body;
      const updateRestaurantData: Restaurant =
        await this.restaurantService.updateRestaurant(
          restaurantId,
          restaurantData
        );

      res.status(200).json({ data: updateRestaurantData, success: true });
    } catch (error) {
      next(error);
    }
  };

  public deleteRestaurant = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const restaurantId: string = req.params.id;
      const deleteRestaurantData: Restaurant =
        await this.restaurantService.deleteRestaurant(restaurantId);

      res.status(200).json({ data: deleteRestaurantData, success: true });
    } catch (error) {
      next(error);
    }
  };
}

export default RestaurantController;
