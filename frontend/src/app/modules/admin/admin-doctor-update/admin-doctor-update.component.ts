import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminDoctorUpdateService } from './admin-doctor-update.service';
import { AdminDoctorUpdate } from './model/adminDoctorUpdate';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminSpecializationNameDto } from '../admin-doctor-add/model/AdminSpecializationNameDto';

@Component({
  selector: 'app-admin-doctor-update',
  templateUrl: './admin-doctor-update.component.html',
  styleUrls: ['./admin-doctor-update.component.scss']
})
export class AdminDoctorUpdateComponent {


  doctor!: AdminDoctorUpdate
  doctorForm!: FormGroup
  requiredFileTypes = "image/jpeg, image/png";
  imageForm!: FormGroup;
  image: string | null = null;
  specializations : Array<AdminSpecializationNameDto> = [];


  constructor(
    private router : ActivatedRoute,
    private adminDoctorUpdateService : AdminDoctorUpdateService,
    private formBuilder : FormBuilder
    ){}

  ngOnInit() : void{
    this.getDoctor()
    this.doctorForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(4)]],
      specializationId: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      details: ['', [Validators.required, Validators.minLength(4)]]
    })

    this.imageForm = this.formBuilder.group({
      file: ['']
  })

  this.getSpecialization()
  }

  getDoctor(){
    let id = Number(this.router.snapshot.params['id'])
    this.adminDoctorUpdateService.getDoctor(id).subscribe(doctor => this.doctorForm.setValue({
      name: doctor?.name,
      description: doctor?.description,
      specializationId: doctor?.specializationId,
      price: doctor?.price,
      details: doctor?.details
    }))
  }

  submit(){
    let id = Number(this.router.snapshot.params['id'])
    this.adminDoctorUpdateService.saveDoctor(id, {
      name: this.doctorForm.get('name')?.value,
      description: this.doctorForm.get('description')?.value,
      specializationId: this.doctorForm.get('specializationId')?.value,
      price: this.doctorForm.get('price')?.value,
      details: this.doctorForm.get('details')?.value,
      image: this.image
    } as AdminDoctorUpdate).subscribe(doctor => this.doctorForm.setValue({
      name: doctor?.name ,
      description: doctor?.description,
      specializationId: doctor?.specializationId,
      price: doctor?.price,
      details:doctor?.details
    }))
  }



  uploadFile(){
    let formData = new FormData();
    formData.append('file', this.imageForm.get('file')?.value);
    this.adminDoctorUpdateService.uploadImage(formData)
      .subscribe(result => this.image = result.filename);
  }

  onFileChange(event: any){
    if(event.target.files.length > 0){
      this.imageForm.patchValue({
        file: event.target.files[0]
      });
    }
  }

  getSpecialization(){
    this.adminDoctorUpdateService.getSpecialization()
    .subscribe(specialization => this.specializations = specialization)
  }

}
