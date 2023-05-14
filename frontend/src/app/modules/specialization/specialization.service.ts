import { Injectable } from '@angular/core';
import { SpecializationDoctors } from './model/specializationDoctors';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {


  constructor(private http: HttpClient) { }

  getSpecializationWithDoctors(name: string, page: number, size: number): Observable<SpecializationDoctors> {
    return this.http.get<SpecializationDoctors>(`/api/specializations/${name}/doctor?page=${page}&size=${size}`);
  }
}
