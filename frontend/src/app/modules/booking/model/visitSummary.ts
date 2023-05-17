import { Payment } from "./payment";

export interface VisitSummary{
    id: number,
    placeDate: Date,
    status: string,
    grossValue: number,
    // payment: Payment
}
