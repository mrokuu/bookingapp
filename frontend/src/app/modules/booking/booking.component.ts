import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Doctor } from '../common/doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from './booking.service';
// import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  doctor!: Doctor;
  id!: number;

  constructor(
    private router: ActivatedRoute,
    // private cookieService: CookieService,
    private bookingService : BookingService,
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

      this.bookingService.getCart(this.id)
        .subscribe(doctor => this.doctor = doctor);
    }



}
