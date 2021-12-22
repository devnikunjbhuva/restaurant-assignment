import { NextFunction, Request, Response } from "express";
import { Product } from "@interfaces/product.interface";
import productService from "@services/product.service";

class ProductController {
  public productService = new productService();

  public getProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const findAllProductsData: Product[] =
        await this.productService.findAllProduct();

      res.status(200).json({ data: findAllProductsData, success: true });
    } catch (error) {
      next(error);
    }
  };

  public getProductById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const productId: string = req.params.id;
      const findOneProductData: Product =
        await this.productService.findProductById(productId);

      res.status(200).json({ data: findOneProductData, success: true });
    } catch (error) {
      next(error);
    }
  };

  public getProductByRestaurantId = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const restaurantId: string = req.params.id;
      const productData: Product =
        await this.productService.findProductByRestaurantId(restaurantId);

      res.status(200).json({ data: productData, success: true });
    } catch (error) {
      next(error);
    }
  };

  public createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const productData: Product = req.body;
      const createProductData: Product =
        await this.productService.createProduct(productData);

      res.status(201).json({ data: createProductData, success: true });
    } catch (error) {
      next(error);
    }
  };

  public updateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const productId: string = req.params.id;
      const productData: Product = req.body;
      const updateProductData: Product =
        await this.productService.updateProduct(productId, productData);

      res.status(200).json({ data: updateProductData, success: true });
    } catch (error) {
      next(error);
    }
  };

  public deleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const productId: string = req.params.id;
      const deleteProductData: Product =
        await this.productService.deleteProduct(productId);

      res.status(200).json({ data: deleteProductData, success: true });
    } catch (error) {
      next(error);
    }
  };
}

export default ProductController;
