import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../common/doctor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectedDoctorService {

  constructor(private http: HttpClient) { }



  getDoctor(id: number): Observable<Doctor> {
    return this.http.get<Doctor>("/api/selectedDoctor/" + id);
  }
}
