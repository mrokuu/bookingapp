import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminSpecializationService } from '../admin-specialization.service';

@Component({
  selector: 'app-admin-specialization-add',
  templateUrl: './admin-specialization-add.component.html',
  styleUrls: ['./admin-specialization-add.component.scss']
})
export class AdminSpecializationAddComponent {


  specializationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adminSpecializationService: AdminSpecializationService,
    private router: Router,
    private snackBar: MatSnackBar,

    ) { }

  ngOnInit(): void {
    this.specializationForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: [""],
      details: ["", [Validators.required, Validators.minLength(4)]]
    });
  }

  submit(){
    
  }

}
