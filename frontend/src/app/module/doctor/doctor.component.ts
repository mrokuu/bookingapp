import { Component } from '@angular/core';
import { DoctorService } from './doctor.service';
import { Doctor } from './model/doctor';
import { Page } from 'src/app/components/model/page';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {
  // doctors: Doctor[] = [];
  // totalElemetns: number = 0;
  page! : Page<Doctor>;


  constructor(private doctorService : DoctorService){}

  ngOnInit(): void{
    this.getProducts()
  }

  getProducts(){
   this.getDoctorPage(0,10);
  }

  onPageEvent(event : PageEvent){
    this.getDoctorPage(event.pageIndex, event.pageSize);
  }


  private getDoctorPage(page:number, size: number){
    this.doctorService.getDoctors(page, size)
    .subscribe(page => this.page = page);
  }



}
