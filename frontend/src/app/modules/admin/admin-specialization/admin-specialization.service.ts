import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AdminSpecializationDto } from '../../common/AdminSpecializationDto';
import { AdminSpecialization } from './model/AdminSpecialization';

@Injectable({
  providedIn: 'root'
})
export class AdminSpecializationService {

  constructor(private http: HttpClient) { }

  getSpecializations(): Observable<Array<AdminSpecializationDto>>{
    return this.http.get<Array<AdminSpecializationDto>>("/api/admin/specializations");
  }

  createSpecialization(value: any):Observable<AdminSpecialization> {
    return this.http.post<AdminSpecialization>("/api/admin/specialization", value);
  }

  getSpecialization(id: number) {
    return this.http.get<AdminSpecialization>("/api/admin/specialization/"+ id);
  }

  saveDoctor(id: number, value: any): Observable<AdminSpecialization> {
    return this.http.put<AdminSpecialization>("/api/admin/specialization/"+ id, value);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>("/api/admin/specialization/" + id);
  }


}
