import { Router } from "express";
import RestaurantController from "@controllers/restaurant.controller";
import { Routes } from "@interfaces/routes.interface";

class RestaurantRoute implements Routes {
  public path = "/restaurant";
  public router = Router();
  public restaurantController = new RestaurantController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.restaurantController.getRestaurants);
    this.router.get(
      `${this.path}/:id`,
      this.restaurantController.getRestaurantById
    );
    this.router.post(
      `${this.path}`,
      this.restaurantController.createRestaurant
    );
    this.router.put(
      `${this.path}/:id`,
      this.restaurantController.updateRestaurant
    );
    this.router.delete(
      `${this.path}/:id`,
      this.restaurantController.deleteRestaurant
    );
  }
}

export default RestaurantRoute;
