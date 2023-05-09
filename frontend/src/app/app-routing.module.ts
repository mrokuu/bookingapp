import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { HomeComponent } from './module/home/home.component';
import { DoctorComponent } from './module/doctor/doctor.component';
import { FullpageComponent } from './layouts/fullpage/fullpage.component';
import { LoginComponent } from './module/login/login.component';
import { FullpageadminComponent } from './layouts/fullpageadmin/fullpageadmin.component';
import { AdminComponent } from './module/admin/admin.component';

const routes: Routes = [
  {
    path:'',
    component: DefaultComponent,
    children:[{
      path:'',
      component:HomeComponent
    },
    {
      path:'doctors',
      component:DoctorComponent
    }]
  },
  {
    path:'',
    component: FullpageComponent,
    children:[
    {
      path:'login',
      component:LoginComponent
    }]
  },
  {
    path:'',
    component: FullpageadminComponent,
    children:[
    {
      path:'admin',
      component:AdminComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
