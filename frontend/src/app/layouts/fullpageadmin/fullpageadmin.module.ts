import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageadminComponent } from './fullpageadmin.component';
import { AdminComponent } from 'src/app/module/admin/admin.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/components/material.module';
import { AdminDoctorComponent } from 'src/app/module/admin/admin-doctor/admin-doctor.component';
import { AdminDoctorUpdateComponent } from 'src/app/module/admin/admin-doctor-update/admin-doctor-update.component';
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
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FullpageadminModule { }
