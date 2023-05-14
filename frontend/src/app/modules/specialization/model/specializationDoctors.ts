import { Page } from "../../common/page";
import { Doctor } from "../../common/doctor";
import { Specialization } from "./specialization";


export interface SpecializationDoctors{
  specialization: Specialization,
  doctors: Page<Doctor>
}
