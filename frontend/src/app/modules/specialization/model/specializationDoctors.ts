
import { Doctor } from "../../admin/common/doctor";
import { Page } from "../../admin/common/page";
import { Specialization } from "./specialization";


export interface SpecializationDoctors{
  specialization: Specialization,
  doctors: Page<Doctor>
}
