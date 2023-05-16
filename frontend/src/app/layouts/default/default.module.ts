import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { DoctorComponent } from 'src/app/modules/doctor/doctor.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoctorDetailComponent } from 'src/app/modules/doctor-detail/doctor-detail.component';
import { SpecializationComponent } from 'src/app/modules/specialization/specialization.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from 'src/app/modules/booking/booking.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    DoctorComponent,
    DoctorDetailComponent,
    SpecializationComponent, BookingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
