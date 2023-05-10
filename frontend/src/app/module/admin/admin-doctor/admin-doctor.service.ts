import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminDoctor } from './adminDoctor';
import { Observable } from 'rxjs';
import { Page } from 'src/app/components/model/page';

@Injectable({
  providedIn: 'root'
})
export class AdminDoctorService {

  constructor(private http : HttpClient) { }


  getDoctors(page : number, size : number): Observable<Page<AdminDoctor>> {
    return this.http.get<Page<AdminDoctor>>(`/api/admin/doctors?page=${page}&size=${size}`);
}
}
