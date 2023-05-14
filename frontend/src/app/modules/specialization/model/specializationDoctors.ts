import { Doctor } from "../../common/doctor";
import { Page } from "../../common/page";
import { Specialization } from "./specialization";


export interface SpecializationDoctors{
  specialization: Specialization,
  doctor: Page<Doctor>
}
