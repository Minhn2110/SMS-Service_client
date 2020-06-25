import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from 'src/app/state/app.actions';
import * as profileSelector from '../../profile/state/profile.selector'
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'sms-friend-layout',
  templateUrl: './friend-layout.component.html',
  styleUrls: ['./friend-layout.component.css']
})
export class FriendLayoutComponent implements OnInit {
  count$: Observable<number>;

  @Input() type: string;
  datasource: any;
  title: string;
  totalFriend: number;
  userName: string;
  constructor(
    private adminService: AdminService,
    private store: Store,
    private alertService: AlertService

  ) {
  }

  ngOnInit() {
    this.getUserInfo();
    if (this.type == 'suggestion') {
      this.title = 'Manage Friend Suggestion';
      this.getSuggestionFriend();
    } else if (this.type == 'list') {
      this.title = 'Manage Friend List';
      alert('list');
    } else if (this.type == 'request') {
      this.title = 'Manage Friend Request List';
      this.getRequestFriend();
    }
    console.log(this.type);
  }
  getUserInfo() {
    this.store.select(profileSelector.selectFeatureProperty).subscribe(data => {
      console.log('a', data);
      if (data) {
        this.userName = data.Name;
        // this.userName = data.Avatar;
      }
    });
  }
  getSuggestionFriend() {
    this.adminService.getRecommendFriend().subscribe(friends => {
      console.log(friends);
      if (friends && friends.length > 0) {
        this.totalFriend = friends.length;
        this.datasource = friends;
      }
    });
  }
  getRequestFriend() {
    this.adminService.getFriendList(true, '', true, 1, 10).subscribe(friends => {
      console.log(friends);
      if (friends && friends.length > 0) {
        this.totalFriend = friends.length;
        this.datasource = friends;
      }
    });
  }
  addFriend(id) {
    console.log('id', id);
    const body = {
      RequestUserId: id
    }
    this.adminService.sendFriendRequest(body).subscribe(res => {
      console.log(res);
      if (res) {
        this.alertService.success('Friend request successfully sent.');
      }
    });
  }
  approveFriend(id) {
    console.log(id);
    const body = {
      IsApprove: true,
      RequestedUserId: id
    }
    this.adminService.approveFriend(body).subscribe(res => {
      console.log(res);
      if (res) {
        this.alertService.success('Approve friend success.');
      }
    });
  }

}
