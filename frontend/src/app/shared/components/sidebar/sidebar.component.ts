import { Component } from '@angular/core';
import { SidebarSpecialization } from './specialization/sideBarSpecialization';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  specializations: Array<SidebarSpecialization> = [];

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.getSpecializations();
  }

  getSpecializations(){
    this.sidebarService.getSpecializations()
      .subscribe(specialization => this.specializations = specialization);
  }

}
