import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AdminDoctor } from './adminDoctor';
import { AdminDoctorService } from './admin-doctor.service';
import { MatPaginator } from '@angular/material/paginator';
import { map, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-admin-doctor',
  templateUrl: './admin-doctor.component.html',
  styleUrls: ['./admin-doctor.component.scss']
})
export class AdminDoctorComponent implements AfterViewInit{

  dataSource: AdminDoctor[] = []
  totalElements :number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[]= ["id", "name", "price", "actions"]

  constructor(private adminDoctorService : AdminDoctorService){}



  ngAfterViewInit(): void {
   this.paginator.page.pipe(
    startWith({}),
    switchMap(()=> {
      return this.adminDoctorService.getDoctors(this.paginator.pageIndex, this.paginator.pageSize);
    }),
    map(data => {
        this.totalElements = data.totalElements;
        return data.content;
    })
   ).subscribe(data => this.dataSource = data);

  }


  // getDoctors(){
  //   this.adminDoctorService.getDoctors(0,25)
  //   .subscribe(page => this.dataSource = page.content)
  // }
}
