import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VisitSummary } from '../../booking/model/visitSummary';

@Injectable({
  providedIn: 'root'
})
export class CartCommonService {

  constructor(private http: HttpClient) { }

  getCart(id: number): Observable<VisitSummary> {
    return this.http.get<VisitSummary>("/api/visits/" + id);
  }
}
