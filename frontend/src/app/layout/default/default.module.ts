import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/module/home/home.component';
import { DoctorComponent } from 'src/app/module/doctor/doctor.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    DoctorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ComponentsModule
  ]
})
export class DefaultModule { }
