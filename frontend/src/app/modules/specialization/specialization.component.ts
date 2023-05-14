import { Component } from '@angular/core';
import { SpecializationDoctors } from './model/specializationDoctors';
import { SpecializationService } from './specialization.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.scss']
})
export class SpecializationComponent {

  specializationDoctors!: SpecializationDoctors


  constructor(
    private categoryService: SpecializationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

}
