import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule
  ],
  exports:[
    MatButtonModule,
    MatListModule
  ]
})
export class MaterialModule { }
