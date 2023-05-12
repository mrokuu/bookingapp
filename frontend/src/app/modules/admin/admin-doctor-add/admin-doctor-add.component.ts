import { Component } from '@angular/core';
import { AdminDoctorUpdate } from '../admin-doctor-update/model/adminDoctorUpdate';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminDoctorUpdateService } from '../admin-doctor-update/admin-doctor-update.service';
import { AdminDoctorAddService } from './admin-doctor-add.service';
import { AdminMessageComponent } from '../admin-message/admin-message.component';
import { AdminMessageService } from '../admin-message.service';

@Component({
  selector: 'app-admin-doctor-add',
  templateUrl: './admin-doctor-add.component.html',
  styleUrls: ['./admin-doctor-add.component.scss']
})
export class AdminDoctorAddComponent {


  doctor!: AdminDoctorUpdate

  doctorForm!: FormGroup

  constructor(
    private router : Router,
    private adminDoctorAddService : AdminDoctorAddService,
    private formBuilder : FormBuilder,
    private adminMessageService : AdminMessageService
    ){}

  ngOnInit() : void{

    this.doctorForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(4)]],
      specialization: ['', [Validators.required, Validators.minLength(4)]],
      price: ['', [Validators.required, Validators.min(0)]]
    })
  }




  submit() {
    this.adminDoctorAddService.saveNewDoctor(this.doctorForm.value)
      .subscribe({
        next: doctor => this.router.navigate(["admin/doctors"]),
        error:err => this.adminMessageService.addSpringErrors(err.error)


    })
  }

}
