import { Router } from "express";
import { Routes } from "@interfaces/routes.interface";
import ProductRoute from "./product.route";
import RestaurantRoute from "./restaurant.route";

class IndexRoute implements Routes {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.use(new RestaurantRoute().router);
    this.router.use(new ProductRoute().router);
  }
}

export default IndexRoute;
