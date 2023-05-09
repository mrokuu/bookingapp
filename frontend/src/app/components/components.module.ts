import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexModule,
    MaterialModule,
    MatCardModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MatCardModule
  ]
})
export class ComponentsModule { }
