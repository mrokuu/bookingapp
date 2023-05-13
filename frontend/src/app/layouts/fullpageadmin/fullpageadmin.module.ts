import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FullpageadminComponent } from './fullpageadmin.component';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import {MatListModule} from '@angular/material/list';
import { AdminDoctorComponent } from 'src/app/modules/admin/admin-doctor/admin-doctor.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { AdminDoctorUpdateComponent } from 'src/app/modules/admin/admin-doctor-update/admin-doctor-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDoctorAddComponent } from 'src/app/modules/admin/admin-doctor-add/admin-doctor-add.component';
import { AdminProductFormConponent } from 'src/app/modules/admin/admin-doctor-form/admin-doctor-form.component';
import { AdminMessageComponent } from 'src/app/modules/admin/admin-message/admin-message.component';
import { AdminConfirmationComponent } from 'src/app/modules/admin/admin-confirmation/admin-confirmation.component';
import { AdminSpecializationComponent } from 'src/app/modules/admin/admin-specialization/admin-specialization.component';
import { AdminSpecializationUpdateComponent } from 'src/app/modules/admin/admin-specialization/admin-specialization-update/admin-specialization-update.component';
import { AdminSpecializationAddComponent } from 'src/app/modules/admin/admin-specialization/admin-specialization-add/admin-specialization-add.component';
import { AdminSpecializationFormConponent } from 'src/app/modules/admin/admin-specialization/admin-specialization-form/admin-specialization-form';




@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminDoctorComponent,
    AdminDoctorUpdateComponent,
    AdminDoctorAddComponent,
    AdminProductFormConponent,
    AdminMessageComponent,
    AdminConfirmationComponent,
    AdminSpecializationComponent,
    AdminSpecializationUpdateComponent,
    AdminSpecializationAddComponent,
    AdminSpecializationFormConponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatListModule,
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class FullpageadminModule { }
