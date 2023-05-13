import { Component, ViewChild } from '@angular/core';
import { AdminSpecializationService } from './admin-specialization.service';
import { MatTable } from '@angular/material/table';
import { AdminSpecializationDto } from '../../common/AdminSpecializationDto';

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

    ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.adminSpecializationService.getSpecializations()
      .subscribe(categories => this.data = categories);
  }

  confirmDelete(element: AdminSpecializationDto) {

  }

}
