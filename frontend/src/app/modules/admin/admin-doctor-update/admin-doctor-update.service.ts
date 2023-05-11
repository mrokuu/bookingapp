import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminDoctorUpdate } from './model/adminDoctorUpdate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDoctorUpdateService {


  constructor(private http: HttpClient) { }


  getDoctor(id: number): Observable<AdminDoctorUpdate>{
    return this.http.get<AdminDoctorUpdate>("/api/admin/doctors/" + id);
  }



  saveDoctor(id: number, value: AdminDoctorUpdate) {
    return this.http.put<AdminDoctorUpdate>("/api/admin/doctors/" + id, value)
  }
}
