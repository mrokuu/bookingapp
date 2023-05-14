import { Component, ViewChild } from '@angular/core';
import { AdminSpecializationService } from './admin-specialization.service';
import { MatTable } from '@angular/material/table';
import { AdminSpecializationDto } from '../../common/AdminSpecializationDto';
import { AdminConfirmationService } from '../admin-confirmation.service';

@Component({
  selector: 'app-admin-specialization',
  templateUrl: './admin-specialization.component.html',
  styleUrls: ['./admin-specialization.component.scss']
})
export class AdminSpecializationComponent {


  displayedColumns: string[] = [ "id", "name", "actions"];
  data: Array<AdminSpecializationDto> = [];

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private adminSpecializationService: AdminSpecializationService,
    private adminConfirmationService : AdminConfirmationService
    ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.adminSpecializationService.getSpecializations()
      .subscribe(categories => this.data = categories);
  }

  confirmDelete(element: AdminSpecializationDto) {
    this.adminConfirmationService.openConfirmDialog("Are you sure do you want to delete specializatio?")
    .afterClosed()
    .subscribe(result => {
      if(result) {
        this.adminSpecializationService.delete(element.id)
          .subscribe(() => {
            this.data.forEach((value, index) => {
              if(element == value) {
                this.data.splice(index, 1);
                this.table.renderRows();
              }
            })
          });
      }
    });
  }

}
