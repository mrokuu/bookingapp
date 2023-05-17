import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../common/doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from './booking.service';
import { InitData } from './model/initData';
import { ClientDto } from './model/clientDto';
import { VisitSummary } from './model/visitSummary';
// import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  doctor!: Doctor;
  id!: number;
  errorMessage = false;
  formGrup!: FormGroup;
  initData!: InitData;
  visitSummary!: VisitSummary;
  clientDto!: ClientDto;


  constructor(
    private router: ActivatedRoute,
    // private cookieService: CookieService,
    private bookingService : BookingService,
    private formBuilder: FormBuilder,

    ) { }


    ngOnInit(): void {

      this.formGrup = this.formBuilder.group({
        firstname: [''],
        lastname: [''],
        street: [''],
        zipcode: [''],
        city: [''],
        email: [''],
        phone: [''],
        shipment: [''],
        payment:  ['']
      });
      this.getId()
      this.getSelectedDoctor()
      console.log(this.id);
    }



    getId (){

      this.router.queryParams.subscribe(params => {
        this.id = + params['id'];
      });
    }

    getSelectedDoctor() {

      this.bookingService.getDoctor(this.id)
        .subscribe(doctor => this.doctor = doctor);
    }


    submit(){
      if(this.formGrup.valid){
        this.bookingService.bookVisit({
          firstname: this.formGrup.get('firstname')?.value,
          lastname: this.formGrup.get('lastname')?.value,
          street: this.formGrup.get('street')?.value,
          zipcode: this.formGrup.get('zipcode')?.value,
          city: this.formGrup.get('city')?.value,
          email: this.formGrup.get('email')?.value,
          phone: this.formGrup.get('phone')?.value,
          doctorId: this.id,
          // shipmentId: Number(this.formGrup.get('shipment')?.value.id),
          // paymentId:  Number(this.formGrup.get('payment')?.value.id),
        } as ClientDto, this.id)
          .subscribe({
            next: visitSummary => {
              this.visitSummary = visitSummary;
              this.errorMessage = false;
            },
            error: err => this.errorMessage = true
        })
      }
    }




    get firstname(){
      return this.formGrup.get("firstname");
    }

    get lastname(){
      return this.formGrup.get("lastname");
    }

    get street(){
      return this.formGrup.get("street");
    }

    get zipcode(){
      return this.formGrup.get("zipcode");
    }

    get city(){
      return this.formGrup.get("city");
    }

    get email(){
      return this.formGrup.get("email");
    }

    get phone(){
      return this.formGrup.get("phone");
    }

    get shipment(){
      return this.formGrup.get("shipment");
    }




}
