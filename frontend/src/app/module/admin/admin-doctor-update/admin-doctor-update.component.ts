import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminDoctorUpdate } from './model/adminDoctorUpdate';
import { AdminDoctorUpdateService } from './admin-doctor-update.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-doctor-update',
  templateUrl: './admin-doctor-update.component.html',
  styleUrls: ['./admin-doctor-update.component.scss']
})
export class AdminDoctorUpdateComponent {

  doctor!: AdminDoctorUpdate
  doctorForm!: FormGroup

  constructor(private router: ActivatedRoute,
    private adminDoctorUpdateService: AdminDoctorUpdateService,
    private formBuilder: FormBuilder
    ){}


  ngOnInit(): void {
    this.getDoctor();
    this.doctorForm = this.formBuilder.group({
      name: [''],
      description: [''],
      specialization: [''],
      price: ['']
    })
  }

  getDoctor(){
    let id = Number(this.router.snapshot.params['id']);
    this.adminDoctorUpdateService.getDoctor(id).subscribe(doctor => this.doctorForm.setValue({
      name: doctor.name,
      description: doctor.description,
      specialization: doctor.specialization,
      price: doctor.price
    }))


  }


  submit(){

    let id = Number(this.router.snapshot.params['id']);
    this.adminDoctorUpdateService.saveDoctor(id, {
      name: this.doctorForm.get('name')?.value,
      description: this.doctorForm.get('description')?.value,
      specialization:this.doctorForm.get('specialization')?.value,
      price:this.doctorForm.get('price')?.value
    } as AdminDoctorUpdate).subscribe(doctor => this.doctorForm.setValue({
      name: doctor.name,
      description: doctor.description,
      specialization: doctor.specialization,
      price: doctor.price
    }));
  }

}
