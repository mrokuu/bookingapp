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
import { SpecializationComponent } from './modules/specialization/specialization.component';
import { BookingComponent } from './modules/booking/booking.component';
import { SelectedDoctorComponent } from './modules/selected-doctor/selected-doctor.component';
import { AdminVisitUpdateComponent } from './modules/admin/admin-visit/admin-visit-update/admin-visit-update.component';
import { AdminVisitComponent } from './modules/admin/admin-visit/admin-visit.component';
import { FullpageadminemptyComponent } from './layouts/fullpageadminempty/fullpageadminempty.component';
import { AdminLoginComponent } from './modules/admin/admin-login/admin-login.component';
import { AdminAuthorizeGuard } from './modules/admin/common/guard/adminAuthorizeGuard';

const routes: Routes = [
  {
    path:'', component: DefaultComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'doctors', component: DoctorComponent},
      {path: 'doctors/:details', component: DoctorDetailComponent},
      {path: 'specializations/:name', component: SpecializationComponent},
      {path: 'selectedDoctor', component: SelectedDoctorComponent},
      {path: 'booking', component: BookingComponent},
    ]
  },
  {
    path:'', component: FullpageComponent, children: [
      {path: 'login', component: LoginComponent}
    ]
  },
  {
    path:'', component: FullpageadminComponent, children: [
      {path: 'admin', component: AdminComponent, canActivate: [AdminAuthorizeGuard]},
      {path: 'admin/doctors', component: AdminDoctorComponent, canActivate: [AdminAuthorizeGuard]},
      {path: 'admin/doctors/update/:id', component: AdminDoctorUpdateComponent, canActivate: [AdminAuthorizeGuard]},
      {path: 'admin/doctors/add', component: AdminDoctorAddComponent, canActivate: [AdminAuthorizeGuard]},
      {path: 'admin/specialization', component: AdminSpecializationComponent, canActivate: [AdminAuthorizeGuard]},
      {path: 'admin/specialization/add', component: AdminSpecializationAddComponent, canActivate: [AdminAuthorizeGuard]},
      {path: 'admin/specialization/update/:id', component: AdminSpecializationUpdateComponent, canActivate: [AdminAuthorizeGuard]},
      {path: 'admin/visits', component: AdminVisitComponent, canActivate: [AdminAuthorizeGuard]},
      {path: 'admin/visits/update/:id', component: AdminVisitUpdateComponent, canActivate: [AdminAuthorizeGuard]},
    ]
  },
  {
    path:'', component: FullpageadminemptyComponent, children: [
      {path: 'admin/login', component: AdminLoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
