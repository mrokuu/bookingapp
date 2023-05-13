import { Component, ViewChild } from '@angular/core';
import { AdminSpecializationNameDto } from './model/AdminSpecializationNameDto';
import { AdminSpecializationService } from './admin-specialization.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-admin-specialization',
  templateUrl: './admin-specialization.component.html',
  styleUrls: ['./admin-specialization.component.scss']
})
export class AdminSpecializationComponent {


  displayedColumns: string[] = [ "id", "name", "actions"];
  data: Array<AdminSpecializationNameDto> = [];

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private adminSpecializationService: AdminSpecializationService,

    ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.adminSpecializationService.getCategories()
      .subscribe(categories => this.data = categories);
  }

  confirmDelete(element: AdminSpecializationNameDto) {



  }

}
