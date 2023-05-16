import { Component } from '@angular/core';
import { Doctor } from '../common/doctor';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking/booking.service';
import { FormBuilder } from '@angular/forms';
import { SelectedDoctorService } from './selected-doctor.service';

@Component({
  selector: 'app-selected-doctor',
  templateUrl: './selected-doctor.component.html',
  styleUrls: ['./selected-doctor.component.scss']
})
export class SelectedDoctorComponent {

  doctor!: Doctor;
  id!: number;

  constructor(
    private router: ActivatedRoute,
    // private cookieService: CookieService,
    private selectedDoctorService : SelectedDoctorService,
    private formBuilder: FormBuilder,

    ) { }

    ngOnInit(): void {
      this.getId()
      this.getSelectedDoctor()

    }

    getId (){

      this.router.queryParams.subscribe(params => {
        this.id = + params['id'];
      });
    }

    getSelectedDoctor() {

      this.selectedDoctorService.getDoctor(this.id)
        .subscribe(doctor => this.doctor = doctor);
    }



}
