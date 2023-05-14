import { Component } from '@angular/core';
import { DoctorDetails } from './model/doctorDetails';
import { ActivatedRoute } from '@angular/router';
import { DoctorDetailService } from './doctor-detail.service';
import { Doctor } from '../common/doctor';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss']
})
export class DoctorDetailComponent {

  doctor!: Doctor;

  constructor(
    private doctorDetailsService: DoctorDetailService,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    let details = this.router.snapshot.params['details'];
    this.doctorDetailsService.getDoctorDetails(details)
      .subscribe(doctor => this.doctor = doctor);
  }

}
