import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from 'src/app/shared/model/page';
import { AdminDoctor } from './model/adminDoctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDoctorService {

  constructor(private http: HttpClient) { }

  getDoctors(page: number, size: number): Observable<Page<AdminDoctor>> {
    return this.http.get<Page<AdminDoctor>>(`/api/admin/doctors?page=${page}&size=${size}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>('/api/admin/doctors/' + id);
  }
}
