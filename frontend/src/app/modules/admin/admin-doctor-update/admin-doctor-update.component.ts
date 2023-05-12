import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminDoctorUpdateService } from './admin-doctor-update.service';
import { AdminDoctorUpdate } from './model/adminDoctorUpdate';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      specialization: ['', [Validators.required, Validators.minLength(4)]],
      price: ['', [Validators.required, Validators.min(0)]]
    })
  }


  getDoctor(){
    let id = Number(this.router.snapshot.params['id'])
    this.adminDoctorUpdateService.getDoctor(id).subscribe(doctor => this.doctorForm.setValue({
      name: doctor.name,
      description: doctor.description,
      specialization: doctor.specialization,
      price: doctor.price
    }))
  }

  submit(){
    let id = Number(this.router.snapshot.params['id'])
    this.adminDoctorUpdateService.saveDoctor(id, {
      name: this.doctorForm.get('name')?.value,
      description: this.doctorForm.get('description')?.value,
      specialization: this.doctorForm.get('specialization')?.value,
      price: this.doctorForm.get('price')?.value,
    } as AdminDoctorUpdate).subscribe(doctor => this.doctorForm.setValue({
      name: doctor.name ,
      description: doctor.description,
      specialization: doctor.specialization,
      price: doctor.price
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

}
