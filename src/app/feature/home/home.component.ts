import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { AdminService } from 'src/app/services/admin.service';
import { Store } from '@ngrx/store';
import * as profileSelector from '../../profile/state/profile.selector'
import { takeWhile } from 'rxjs/internal/operators/takeWhile';
import { AlertService } from 'src/app/services/alert.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'sms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friend: any;
  isSubscribing: boolean;
  isUserInfo: boolean;
  user:  any;
  constructor(
    private dashBoardService: DashboardService,
    private adminService: AdminService,
    private store: Store,
    private alertService: AlertService,
    private router:  ActivatedRoute
  ) { }

  ngOnInit() {
    this.isSubscribing = true;
    this.isUserInfo = false;
    this.getSuggestionFriend();
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if (this.user) {
      this.isUserInfo = true;
    } else {
      this.isUserInfo = false;
    }
  }

  getSuggestionFriend() {
    this.adminService.getRecommendFriendPublic().subscribe(friends => {
      console.log(friends);
      this.friend = friends;
      
    })
  }
  // addFriend() {
  //   if (this.isUserInfo) {
  //     alert('a');
  //   } else {
  //     this.alertService.info('Opps !!!', 'Not logged in, please log in to continue !');
  //   }
  // }
}
