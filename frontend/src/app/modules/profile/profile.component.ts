import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../common/service/jwt.service';
import { VisitListDto } from './model/visitListDto';
import { ProfileService } from './profile.service';
import { VisitSummary } from '../booking/model/visitSummary';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  visit!: Array<VisitSummary>;
  displayedColumns = ["id", "placeDate", "orderStatus", "grossValue"];

  constructor(private profileService: ProfileService,
    private jwtService: JwtService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(!this.jwtService.isLoggedIn()) {
      this.router.navigate(["/login"]);
    }
    this.getOrders();
  }

  getOrders(){
    this.profileService.getVisits()
      .subscribe(visit => this.visit = visit);
  }

}
