import { Injectable } from '@angular/core';
import { DoctorDetails } from '../doctor-detail/model/doctorDetails';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../common/doctor';
import { VisitSummary } from './model/visitSummary';
import { ClientDto } from './model/clientDto';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }


  getDoctor(id: number): Observable<Doctor> {
    return this.http.get<Doctor>("/api/booking/" + id);
  }


  bookVisit(client: ClientDto): Observable<VisitSummary>{
    return this.http.post<VisitSummary>("/api/booking/", client);
  }

}
