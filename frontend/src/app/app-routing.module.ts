import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { DoctorComponent } from './modules/doctor/doctor.component';
import { FullpageComponent } from './layouts/fullpage/fullpage.component';
import { LoginComponent } from './modules/login/login.component';
import { FullpageadminComponent } from './layouts/fullpageadmin/fullpageadmin.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AdminDoctorComponent } from './modules/admin/admin-doctor/admin-doctor.component';
import { AdminDoctorUpdateComponent } from './modules/admin/admin-doctor-update/admin-doctor-update.component';
import { AdminDoctorAddComponent } from './modules/admin/admin-doctor-add/admin-doctor-add.component';
import { DoctorDetailComponent } from './modules/doctor-detail/doctor-detail.component';
import { AdminSpecializationComponent } from './modules/admin/admin-specialization/admin-specialization.component';
import { AdminSpecializationAddComponent } from './modules/admin/admin-specialization/admin-specialization-add/admin-specialization-add.component';
import { AdminSpecializationUpdateComponent } from './modules/admin/admin-specialization/admin-specialization-update/admin-specialization-update.component';

const routes: Routes = [
  {
    path:'', component: DefaultComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'doctors', component: DoctorComponent},
      {path: 'doctors/:details', component: DoctorDetailComponent},
    ]
  },
  {
    path:'', component: FullpageComponent, children: [
      {path: 'login', component: LoginComponent}
    ]
  },
  {
    path:'', component: FullpageadminComponent, children: [
      {path: 'admin', component: AdminComponent},
      {path: 'admin/doctors', component: AdminDoctorComponent},
      {path: 'admin/doctors/update/:id', component: AdminDoctorUpdateComponent},
      {path: 'admin/doctors/add', component: AdminDoctorAddComponent},
      {path: 'admin/specialization', component: AdminSpecializationComponent},
      {path: 'admin/specialization/add', component: AdminSpecializationAddComponent},
      {path: 'admin/specialization/update/:id', component: AdminSpecializationUpdateComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
