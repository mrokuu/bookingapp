import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VisitListDto } from './model/visitListDto';
import { VisitSummary } from '../booking/model/visitSummary';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getVisits(): Observable<Array<VisitSummary>> {
    return this.http.get<Array<VisitSummary>>("/api/visits");
  }

}
