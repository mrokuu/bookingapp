import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminConfirmationComponent } from './admin-confirmation/admin-confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class AdminConfirmationService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(message: string): MatDialogRef<AdminConfirmationComponent, Boolean>{
    return this.dialog.open(AdminConfirmationComponent, {
      width: '400px',
      data: {
        message: message
      }
    });
  }
}
