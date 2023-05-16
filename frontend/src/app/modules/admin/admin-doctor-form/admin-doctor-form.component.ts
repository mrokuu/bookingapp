import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-product-form',
    template: `
    <div [formGroup]="parentForm" fxLayout="column">
    <form fxLayout="column" >
  <mat-form-field appearance="fill">
      <mat-label>Name</mat-label>
      <input matInput placeholder="Enter name" formControlName="name">
  </mat-form-field>

  <mat-form-field appearance="fill">
      <mat-label>Description</mat-label>
      <textarea matInput rows="20" placeholder="Enter description" formControlName="description"></textarea>
  </mat-form-field>

  <mat-form-field appearance="fill">
      <mat-label>Specialization</mat-label>
      <input matInput placeholder="Enter specializaiont" formControlName="specialization">

  </mat-form-field>

  <mat-form-field appearance="fill">
      <mat-label>Price</mat-label>
      <input matInput placeholder="Enter price" formControlName="price">
  </mat-form-field>


  <div fxLayout="colum" fxFlexAlign="end" fxLayoutGap="10">
      <button mat-flat-button color="primary">Save</button>
  </div>
</form>
</div>`,
    styles: [`
    .erroMessages{
        color:red;
    }`]
})
export class AdminProductFormConponent implements OnInit {

    @Input() parentForm!: FormGroup;

    ngOnInit(): void {

    }


}
