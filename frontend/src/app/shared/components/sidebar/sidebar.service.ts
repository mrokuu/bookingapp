import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SidebarSpecialization } from './specialization/sideBarSpecialization';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpClient) { }

  getSpecializations(): Observable<Array<SidebarSpecialization>>{
    return this.http.get<Array<SidebarSpecialization>>("/api/specializations");
  }
}
