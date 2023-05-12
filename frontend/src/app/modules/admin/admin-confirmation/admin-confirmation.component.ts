import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-confirmation',
  templateUrl: './admin-confirmation.component.html',
  styleUrls: ['./admin-confirmation.component.scss']
})
export class AdminConfirmationComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
}
