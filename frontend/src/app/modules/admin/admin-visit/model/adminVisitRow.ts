import { AdminDoctorDto } from "./adminDoctor";


export interface AdminVisitRow{
    id: number,
    visitId: number,
    doctorId:number,
    price: number,
    adminVisitDoctor: AdminDoctorDto
}
