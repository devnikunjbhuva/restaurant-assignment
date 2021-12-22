import { Router } from "express";
import ProductController from "@controllers/product.controller";
import { Routes } from "@interfaces/routes.interface";

class ProductRoute implements Routes {
  public path = "/product";
  public router = Router();
  public productController = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.productController.getProducts);
    this.router.get(`${this.path}/:id`, this.productController.getProductById);
    this.router.get(
      `${this.path}/restaurant/:id`,
      this.productController.getProductByRestaurantId
    );
    this.router.post(`${this.path}`, this.productController.createProduct);
    this.router.put(`${this.path}/:id`, this.productController.updateProduct);
    this.router.delete(
      `${this.path}/:id`,
      this.productController.deleteProduct
    );
  }
}

export default ProductRoute;
