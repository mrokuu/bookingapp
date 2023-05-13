import { Injectable } from '@angular/core';
import { AdminSpecializationNameDto } from './model/AdminSpecializationNameDto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminSpecializationService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Array<AdminSpecializationNameDto>>{
    return this.http.get<Array<AdminSpecializationNameDto>>("/api/admin/specializations");
  }




}
