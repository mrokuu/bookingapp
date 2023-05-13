import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminDoctorUpdate } from '../admin-doctor-update/model/adminDoctorUpdate';
import { Observable } from 'rxjs';
import { UploadResponse } from './model/UploadResponse';
import { AdminSpecializationNameDto } from './model/AdminSpecializationNameDto';

@Injectable({
  providedIn: 'root'
})
export class AdminDoctorAddService {

  constructor(private http: HttpClient) { }

  saveNewDoctor(doctor : AdminDoctorUpdate) : Observable<AdminDoctorUpdate>{
    return this.http.post<AdminDoctorUpdate>("/api/admin/doctors", doctor)
  }

  uploadImage(formData: FormData): Observable<UploadResponse> {
    return this.http.post<UploadResponse>('/api/admin/products/upload-image', formData);
  }


  getSpecialization(): Observable<Array<AdminSpecializationNameDto>>{
    return this.http.get<Array<AdminSpecializationNameDto>>("/api/admin/specializations");

  }
}
