import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-specialization-form',
    template: `
    <div [formGroup]="parentForm" fxLayout="column">
        <mat-form-field appearance="fill">
            <mat-label>Name</mat-label>
            <input matInput placeholder="Enter name" formControlName="name">
            <div *ngIf="name?.invalid && (name?.dirty || name?.touched)" class="erroMessages">
                <div *ngIf="name?.errors?.['required']">
                    Name is required
                </div>
            </div>
        </mat-form-field>



        <mat-form-field appearance="fill">
            <mat-label>Description</mat-label>
            <textarea matInput rows="10" placeholder="Podaj opis produktu" formControlName="description"></textarea>
            <div *ngIf="description?.invalid && (description?.dirty || description?.touched)" class="erroMessages">
                <div *ngIf="description?.errors?.['required']">
                    Description is required
                </div>

            </div>
        </mat-form-field>




        <div fxLayoutAlign="end">
            <button mat-flat-button color="primary" >Save</button>
        </div>
</div>`,
    styles: [`
    .erroMessages{
        color:red;
    }`]
})
export class AdminSpecializationFormConponent implements OnInit {

    @Input() parentForm!: FormGroup;

    constructor(){}

    ngOnInit(): void {
    }

    get name(){
        return this.parentForm.get("name");
    }

    get description(){
        return this.parentForm.get("description");
    }

    get slug(){
        return this.parentForm.get("details");
    }
}
