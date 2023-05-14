import { Component, OnDestroy } from '@angular/core';
import { SpecializationDoctors } from './model/specializationDoctors';
import { SpecializationService } from './specialization.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Subscription, filter } from 'rxjs';
import { Specialization } from './model/specialization';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.scss']
})
export class SpecializationComponent implements OnDestroy{

  specializationDoctors!: SpecializationDoctors
  // specialization!: Specialization
  private sub!: Subscription;




  constructor(
    private specializationService: SpecializationService,
    private route: ActivatedRoute,
    private router: Router

  ) {}


  ngOnInit(): void {
    this.sub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.getSpecializationWithDoctors(0, 10));

    this.getSpecializationWithDoctors(0, 10);

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  getSpecializationWithDoctors(page: number, size: number) {
    let name = this.route.snapshot.params['name'];
    this.specializationService.getSpecializationWithDoctors(name, page, size)
      .subscribe(specializationDoctor => this.specializationDoctors = specializationDoctor);


  }

  onPageChange(event: PageEvent) {
    this.getSpecializationWithDoctors(event.pageIndex, event.pageSize);
  }

}
