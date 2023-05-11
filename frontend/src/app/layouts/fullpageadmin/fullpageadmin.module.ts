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




@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminDoctorComponent,
    AdminDoctorUpdateComponent
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
