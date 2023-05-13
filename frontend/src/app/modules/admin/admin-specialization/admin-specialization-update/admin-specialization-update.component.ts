import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminSpecializationService } from '../admin-specialization.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminSpecialization } from '../model/AdminSpecialization';

@Component({
  selector: 'app-admin-specialization-update',
  templateUrl: './admin-specialization-update.component.html',
  styleUrls: ['./admin-specialization-update.component.scss']
})
export class AdminSpecializationUpdateComponent {

  specializationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adminSpecializationService: AdminSpecializationService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,

  ) { }

  ngOnInit(): void {
    this.specializationForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: [""],
      details: ["", [Validators.required, Validators.minLength(4)]]
    });
    this.getCategory();
  }

  getCategory(){
    this.adminSpecializationService.getSpecialization(Number(this.route.snapshot.params['id']))
      .subscribe(category => this.mapToFormValues(category));
  }

  submit(){
    this.adminSpecializationService.saveDoctor(Number(this.route.snapshot.params['id']), this.specializationForm.value)
      .subscribe({
        next: category => {
          this.mapToFormValues(category);
          this.snackBar.open("Kategoria zostałą zapisana", "", {duration: 3000});
        }
      })
  }

  private mapToFormValues(category: AdminSpecialization) {
    this.specializationForm.setValue({
      name: category.name,
      description: category.description,
      details: category.details
    });
  }

}
