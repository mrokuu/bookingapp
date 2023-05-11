import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './model/doctor';
import { Page } from 'src/app/shared/model/page';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  getDoctors(page: number, size: number): Observable<Page<Doctor>> {
    return this.http.get<Page<Doctor>>(`/api/doctors?page=${page}&size=${size}`);
  }
}
