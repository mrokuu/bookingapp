import { Doctor } from "src/app/modules/common/doctor"
import { AdminPayment } from "./adminPayment"
import { AdminVisitRow } from "./adminVisitRow"

export interface AdminVisit{
    id: number,
    placeDate: Date,
    visitStatus: string,
    visitRows: Array<AdminVisitRow>
    grossValue: number,
    firstname: string,
    lastname: string,
    street: string,
    zipcode: string,
    city: string,
    email: string,
    phone: string,
    doctor: Doctor,
    payment: AdminPayment
}
