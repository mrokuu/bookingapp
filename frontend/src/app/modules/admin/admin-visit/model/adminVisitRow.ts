import { Doctor } from "src/app/modules/common/doctor";
import { AdminDoctorDto } from "./adminDoctor";


export interface AdminVisitRow{
    id: number,
    visitId: number,
    doctorId:number,
    price: number,
    doctor:Doctor
}
