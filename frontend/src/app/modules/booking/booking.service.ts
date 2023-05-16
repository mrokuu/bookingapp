import { Injectable } from '@angular/core';
import { DoctorDetails } from '../doctor-detail/model/doctorDetails';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../common/doctor';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }


  getCart(id: number): Observable<Doctor> {
    return this.http.get<Doctor>("/api/selectedDoctor/" + id);
  }

}
