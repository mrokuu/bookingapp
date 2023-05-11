import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminDoctorUpdate } from '../admin-doctor-update/model/adminDoctorUpdate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDoctorAddService {

  constructor(private http: HttpClient) { }

  saveNewDoctor(doctor : AdminDoctorUpdate) : Observable<AdminDoctorUpdate>{
    return this.http.post<AdminDoctorUpdate>("/api/admin/doctors", doctor)
  }
}
