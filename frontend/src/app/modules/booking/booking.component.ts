import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from './booking.service';
import { InitData } from './model/initData';
import { ClientDto } from './model/clientDto';
import { VisitSummary } from './model/visitSummary';
import { Doctor } from '../admin/common/doctor';



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
        payment:  ['']
      });
      this.getId()
      this.getSelectedDoctor()
      this.getinitData();
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
          paymentId:  Number(this.formGrup.get('payment')?.value.id),
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




    setDefaultPayment() {
      this.formGrup.patchValue({"payment": this.initData.payment
        .filter(payment => payment.defaultPayment === true)[0]
      });
    }

    getinitData(){
      this.bookingService.getInitData()
        .subscribe(initData => {
          this.initData = initData;
          this.setDefaultPayment();
        })
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
