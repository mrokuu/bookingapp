import { Component } from '@angular/core';
import { AdminVisit } from '../model/adminVisit';
import { ActivatedRoute } from '@angular/router';
import { AdminVisitService } from '../admin-visit.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-visit-update',
  templateUrl: './admin-visit-update.component.html',
  styleUrls: ['./admin-visit-update.component.scss']
})
export class AdminVisitUpdateComponent {


  visit!: AdminVisit;
  formGroup!: FormGroup;

  statuses!: Map<string, string>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminVisitService: AdminVisitService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.getVisit();
    this.getInitData();
    this.formGroup = this.formBuilder.group({
      orderStatus: ['', Validators.required]
    })
  }

  getVisit() {
    let id = Number(this.activatedRoute.snapshot.params['id']);
    this.adminVisitService.getVisit(id)
      .subscribe(visit => {
        this.visit = visit;
        this.formGroup.setValue({
          orderStatus: visit.visitStatus
        })
        // visit.orderLogs.sort((el1, el2) => new Date(el2.created).getTime() - new Date(el1.created).getTime());
      });
  }


  changeStatus(){
    this.adminVisitService.saveStatus(this.visit.id, this.formGroup.value)
    .subscribe();
  }

  getInitData() {
    this.adminVisitService.getInitData()
      .subscribe(data => this.statuses = data.visitStatus)
  }

}
