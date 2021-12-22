import { model, Schema, Document } from "mongoose";
import { Product } from "@interfaces/product.interface";

const productSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  price: {
    type: Number,
  },
  photo: {
    type: String,
  },
  category: {
    type: String,
  },
});

productSchema.virtual("restaurant", {
  ref: "Restaurant",
  localField: "restaurantId",
  foreignField: "_id",
  justOne: true,
});

const productModel = model<Product & Document>("Product", productSchema);

export default productModel;
