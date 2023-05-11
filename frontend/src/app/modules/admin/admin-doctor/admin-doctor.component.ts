import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { AdminDoctor } from './model/adminDoctor';
import { AdminDoctorService } from './admin-doctor.service';
import { startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-admin-doctor',
  templateUrl: './admin-doctor.component.html',
  styleUrls: ['./admin-doctor.component.scss']
})
export class AdminDoctorComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;

  displayedColumns: string[] = [ "image", "id", "name", "price", "actions"]
  totalElements: number = 0;
  data: AdminDoctor[] = [];

  constructor(
    private adminDoctorService: AdminDoctorService,
    ) { }



  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.adminDoctorService.getDoctors(this.paginator.pageIndex, this.paginator.pageSize);
      })
    ).subscribe(data => {
      this.totalElements = data.totalElements;
      this.data = data.content;
    });
  }


}

