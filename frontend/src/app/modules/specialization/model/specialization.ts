import { Doctor } from "../../common/doctor";


export interface Specialization{
  name: string,
  description: string,
  details : string,
  doctor: Array<Doctor>
}
