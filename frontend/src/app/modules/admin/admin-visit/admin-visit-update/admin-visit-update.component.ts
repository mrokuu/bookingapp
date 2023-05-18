import { Component } from '@angular/core';
import { AdminVisit } from '../model/adminVisit';
import { ActivatedRoute } from '@angular/router';
import { AdminVisitService } from '../admin-visit.service';

@Component({
  selector: 'app-admin-visit-update',
  templateUrl: './admin-visit-update.component.html',
  styleUrls: ['./admin-visit-update.component.scss']
})
export class AdminVisitUpdateComponent {


  visit!: AdminVisit;

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminVisitService: AdminVisitService
    ) { }

  ngOnInit(): void {
    this.getVisit();

  }

  getVisit() {
    let id = Number(this.activatedRoute.snapshot.params['id']);
    this.adminVisitService.getVisit(id)
      .subscribe(visit => this.visit = visit);
  }

}
