import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../admin/common/doctor';

@Injectable({
  providedIn: 'root'
})
export class SelectedDoctorService {

  constructor(private http: HttpClient) { }



  getDoctor(id: number): Observable<Doctor> {
    return this.http.get<Doctor>("/api/selectedDoctor/" + id);
  }
}
