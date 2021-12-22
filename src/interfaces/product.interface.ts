import { Restaurant } from "./restaurant.interface";

export interface Product {
  _id: string;
  restaurantId: string;
  name: string;
  price: number;
  photo: string;
  category: string;
  restaurant: Restaurant;
}
