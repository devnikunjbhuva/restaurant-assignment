import { HttpException } from "@exceptions/HttpException";
import { Product } from "@interfaces/product.interface";
import productModel from "@models/product.model";
import { isEmpty } from "@utils/util";

class ProductService {
  public product = productModel;

  public async findAllProduct(): Promise<Product[]> {
    const products: Product[] = await this.product
      .find()
      .populate("restaurant")
      .lean();

    return products;
  }

  public async findProductById(productId: string): Promise<Product> {
    if (isEmpty(productId)) throw new HttpException(400, "productId required");

    const product: Product = await this.product
      .findOne({
        _id: productId,
      })
      .populate("restaurant")
      .lean();
    if (!product) throw new HttpException(404, "product not found");

    return product;
  }

  public async findProductByRestaurantId(
    restaurantId: string
  ): Promise<Product> {
    if (isEmpty(restaurantId))
      throw new HttpException(400, "restaurantId required");

    const product: Product = await this.product
      .find({
        restaurantId: restaurantId,
      })
      .populate("restaurant")
      .lean();
    if (!product) throw new HttpException(404, "product not found");

    return product;
  }

  public async createProduct(productData: Product): Promise<Product> {
    if (isEmpty(productData))
      throw new HttpException(400, "productData required");

    const product: Product = await this.product.create(productData);

    return product;
  }

  public async updateProduct(
    productId: string,
    productData: Product
  ): Promise<Product> {
    if (isEmpty(productData))
      throw new HttpException(400, "productData required");

    const product: Product = await this.product
      .findByIdAndUpdate(productId, productData, {
        new: true,
      })
      .populate("restaurant")
      .lean();
    if (!product) throw new HttpException(404, "product not found");

    return product;
  }

  public async deleteProduct(productId: string): Promise<Product> {
    const product: Product = await this.product.findByIdAndDelete(productId);
    if (!product) throw new HttpException(404, "product not found");

    return product;
  }
}

export default ProductService;
