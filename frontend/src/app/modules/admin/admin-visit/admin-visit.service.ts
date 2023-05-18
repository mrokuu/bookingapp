import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../common/page';
import { AdminVisit } from './model/adminVisit';

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
}
