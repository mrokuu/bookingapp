import { Doctor } from "../../admin/common/doctor";


export interface Specialization{
  name: string,
  description: string,
  details : string,
  doctor: Array<Doctor>
}
