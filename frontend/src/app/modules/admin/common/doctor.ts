import { Review } from "../../doctor-detail/model/review";

export interface Doctor{
  id:number,
  name: string,
  description: string,
  details: string,
  specialization: string,
  price: number,
  image: string,
  reviews: Array<Review>
}
