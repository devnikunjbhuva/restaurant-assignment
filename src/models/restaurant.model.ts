import { model, Schema, Document } from "mongoose";
import { Restaurant } from "@interfaces/restaurant.interface";
import openingHoursSchema from "./openingHours.schema";

const restaurantSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  picture: {
    type: String,
  },
  openingHours: {
    type: openingHoursSchema,
    required: true,
  },
});

const restaurantModel = model<Restaurant & Document>(
  "Restaurant",
  restaurantSchema
);

export default restaurantModel;
