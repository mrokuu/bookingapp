import { Injectable } from '@angular/core';
import { Doctor } from './model/doctor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
      return this.http.get<Doctor[]>("/api/doctors");
  }
}
