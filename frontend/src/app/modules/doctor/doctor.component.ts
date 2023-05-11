import { Component } from '@angular/core';
import { Doctor } from './model/doctor';
import { DoctorService } from './doctor.service';
import { Page } from 'src/app/shared/model/page';
import { PageEvent } from '@angular/material/paginator';
// import { DoctorService } from './doctor.service';
// import { Doctor } from './model/doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {

  // doctors: Doctor[] = [];
  page!: Page<Doctor>;


  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getDoctors();
  }




  getDoctors() {
    this.getProductPage(0, 10);
  }

  onPageEvent(event: PageEvent){
    this.getProductPage(event.pageIndex, event.pageSize);
  }

  private getProductPage(page: number, size: number) {
    this.doctorService.getDoctors(page, size)
      .subscribe(page => this.page = page);
  }


}
