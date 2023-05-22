import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminVisit } from './model/adminVisit';
import { Page } from '../common/page';

@Injectable({
  providedIn: 'root'
})
export class AdminVisitService {

  constructor(private http: HttpClient) { }



  getVisits(pageIndex: number, pageSize: number): Observable<Page<AdminVisit>> {

    return this.http.get<Page<AdminVisit>>(`/api/admin/visits?page=${pageIndex}&size=${pageSize}`);
  }

  getVisit(id: number): Observable<AdminVisit> {
    return this.http.get<AdminVisit>("/api/admin/visits/" + id);
  }

  saveStatus(id: number, value: any): Observable<void> {
    return this.http.patch<void>("/api/admin/visits/" + id, value);
  }

  getInitData(): Observable<any> {
    return this.http.get<any>("/api/admin/visits/initData");
  }
}
