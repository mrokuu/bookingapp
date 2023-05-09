import { Component } from '@angular/core';
import { DoctorService } from './doctor.service';
import { Doctor } from './model/doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {
  doctors: Doctor[] = [];

  constructor(private doctorService : DoctorService){}

  ngOnInit(): void{
    this.getProducts()
  }

  getProducts(){
    this.doctorService.getDoctors()
    .subscribe(doctors => this.doctors = doctors);
  }
}
