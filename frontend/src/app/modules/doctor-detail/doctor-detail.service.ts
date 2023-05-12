import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorDetails } from './model/doctorDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorDetailService {

  constructor(private http: HttpClient) { }

  getDoctorDetails(details: string): Observable<DoctorDetails>{
    return this.http.get<DoctorDetails>("/api/doctors/" + details);
  }
}
