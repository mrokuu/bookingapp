import { Component, ViewChild } from '@angular/core';
import { AdminVisit } from './model/adminVisit';
import { MatPaginator } from '@angular/material/paginator';
import { AdminVisitService } from './admin-visit.service';
import { map, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-admin-visit',
  templateUrl: './admin-visit.component.html',
  styleUrls: ['./admin-visit.component.scss']
})
export class AdminVisitComponent {


  displayedColumns: string[] = ["id", "placeDate", "grossValue", "actions"];
  totalElements: number = 0;
  data: Array<AdminVisit> = [];
  statuses!: Map<string, string>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private adminVisitService: AdminVisitService) { }

  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.adminVisitService.getVisits(this.paginator.pageIndex, this.paginator.pageSize);
      }),
      map(data => {
        if (data === null) {
          return [];
        }
        this.totalElements = data.totalElements;
        return data.content;
      })
    ).subscribe(data => this.data = data);

  }


  getInitData(){
    this.adminVisitService.getInitData()
      .subscribe(data => this.statuses = new Map(Object.entries(data.orderStatuses)));
  }

  resolveStatus(status: string){
    return this.statuses?.get(status);
  }


}
