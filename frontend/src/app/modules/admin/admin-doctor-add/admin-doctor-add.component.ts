import { Component } from '@angular/core';
import { AdminDoctorUpdate } from '../admin-doctor-update/model/adminDoctorUpdate';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminDoctorUpdateService } from '../admin-doctor-update/admin-doctor-update.service';
import { AdminDoctorAddService } from './admin-doctor-add.service';

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
    private formBuilder : FormBuilder
    ){}

  ngOnInit() : void{

    this.doctorForm = this.formBuilder.group({
      name: [''],
      description: [''],
      specialization: [''],
      price: ['']
    })
  }




  submit() {
    this.adminDoctorAddService.saveNewDoctor(this.doctorForm.value)
      .subscribe(doctor => this.router.navigate(["admin/doctors"]))
  }

}
