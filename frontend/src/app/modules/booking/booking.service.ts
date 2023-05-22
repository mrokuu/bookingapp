import { Injectable } from '@angular/core';
import { DoctorDetails } from '../doctor-detail/model/doctorDetails';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VisitSummary } from './model/visitSummary';
import { ClientDto } from './model/clientDto';
import { InitData } from './model/initData';
import { Doctor } from '../admin/common/doctor';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }


  getDoctor(id: number): Observable<Doctor> {
    return this.http.get<Doctor>("/api/booking/" + id);
  }


  bookVisit(client: ClientDto, id: number): Observable<VisitSummary>{
    return this.http.post<VisitSummary>(`/api/booking/${id}`, client);
  }


  getInitData(): Observable<InitData> {
    return this.http.get<InitData>(`/api/booking/initData`);
  }

}
