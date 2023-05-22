import { Component } from '@angular/core';
import { DoctorDetails } from './model/doctorDetails';
import { ActivatedRoute } from '@angular/router';
import { DoctorDetailService } from './doctor-detail.service';
import { Review } from './model/review';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Doctor } from '../admin/common/doctor';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss']
})
export class DoctorDetailComponent {

  doctor!: Doctor;
  reviewForm!: FormGroup;


  constructor(
    private doctorDetailsService: DoctorDetailService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getDoctorDetails();
    this.reviewForm = this.formBuilder.group({
      authorName: ['', [Validators.required, Validators.minLength(2)]],
      content:  ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  getDoctorDetails() {
    let details = this.router.snapshot.params['details'];
    this.doctorDetailsService.getDoctorDetails(details)
      .subscribe(doctor => this.doctor = doctor);
  }


  submit() {
    if(this.reviewForm.valid){
      this.doctorDetailsService.saveProductReview({
        authorName: this.reviewForm.get("authorName")?.value,
        content:  this.reviewForm.get("content")?.value,
        doctorId: this.doctor.id
      } as Review).subscribe(review => {
        this.reviewForm.reset();
        this.snackBar.open('Thank for opinion', '', { duration: 3000, panelClass: "snack-bar-bg-color-ok" });
      });
    }
  }

  get authorName() {
    return this.reviewForm.get('authorName');
  }

  get content() {
    return this.reviewForm.get('content');
  }


}
