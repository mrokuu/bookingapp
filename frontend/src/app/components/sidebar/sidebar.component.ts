import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  typesOfSpecialization = ['Specialization 1', 'Specialization 2', 'Specialization 3', 'Specialization 4']
}
