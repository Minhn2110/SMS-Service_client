import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from 'src/app/state/app.actions';
import * as profileSelector from '../../profile/state/profile.selector';
import * as ProfileActions from '../../profile/state/profile.actions';
import { AlertService } from 'src/app/services/alert.service';
import { takeWhile } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'sms-friend-layout',
  templateUrl: './friend-layout.component.html',
  styleUrls: ['./friend-layout.component.scss']
})
export class FriendLayoutComponent implements OnInit {
  count$: Observable<number>;

  @Input() type: string;
  datasource = [];
  title: string;
  totalFriend: number;
  userName: string;
  isSubscribing: boolean;
  isPaging: boolean;
  config: any;
  constructor(
    private adminService: AdminService,
    private store: Store,
    private alertService: AlertService,
    private spinner: NgxSpinnerService


  ) {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.datasource.length
    };
  }

  ngOnInit() {
    this.isPaging = true;
    this.isSubscribing = true;
    this.getUserInfo();
    if (this.type == 'suggestion') {
      this.title = 'Manage Friend Suggestion';
      this.getSuggestionFriend();
    } else if (this.type == 'list') {
      this.title = 'Manage Friend List';
      this.getListFriend();
    } else if (this.type == 'request') {
      this.title = 'Manage Friend Request List';
      this.getRequestFriend();
    } else if (this.type == 'receive') {
      this.title = 'Manage Friend Reiceve List';
      this.getReceiveFriend();
    }
    console.log(this.type);
  }

  pagingControl() {
    if(this.totalFriend == 0) {
      this.isPaging = false;
    } else {
      this.isPaging = true;
    }
  }
  getUserInfo() {
    this.store.select(profileSelector.userInfo).pipe(takeWhile(() => this.isSubscribing)).subscribe(data => {
      // console.log('a', data);
      if (data) {
        this.userName = data.Name;
        // this.userName = data.Avatar;
      }
    });
  }
  getSuggestionFriend() {
    this.spinner.show();
    this.adminService.getRecommendFriend().subscribe(friends => {
      console.log(friends);
      if (friends) {
        this.totalFriend = friends.length;
        this.datasource = friends;
        this.pagingControl();
        this.spinner.hide();
      }
    });
  }
  getRequestFriend() {
    this.spinner.show();
    this.adminService.getFriendList(true, '', true, 1, 10).subscribe(friends => {
      console.log(friends);
      if (friends) {
        this.totalFriend = friends.length;
        this.datasource = friends;
        this.pagingControl();
        this.spinner.hide();
      }
    });
  }
  getReceiveFriend() {
    this.spinner.show();
    this.adminService.getFriendList(false, '', true, 1, 10).subscribe(friends => {
      console.log(friends);
      if (friends) {
        this.totalFriend = friends.length;
        this.datasource = friends;
        this.adminService.passfriendReceived(this.totalFriend);
        this.pagingControl();
        this.spinner.hide();
      }
    });
  }
  getListFriend() {
    this.spinner.show();
    this.store.dispatch(ProfileActions.ProfileGetFriendList())
    this.store.select(profileSelector.friendList).subscribe(friends => {
      console.log(friends);
      if (friends) {
        this.totalFriend = friends.length;
        this.datasource = friends;
        this.pagingControl();
        this.spinner.hide();
      }
    })
    // this.adminService.getFriendList(null, '', true, 1, 10).subscribe(friends => {
    //   console.log(friends);
    //   if (friends && friends.length > 0) {
    //     this.totalFriend = friends.length;
    //     this.datasource = friends;
    //   } 
    // });
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
        this.getSuggestionFriend();
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
        this.getReceiveFriend();
        // Reset datasource
      }
    });
  }
  removeFriend(id) {
    const body = {
      FriendId : id
    }
    this.adminService.removeFriend(body).subscribe(res => {
      console.log(res);
      if (res) {
        this.alertService.success('Delete friend success.');
        this.getListFriend();
        // Reset datasource
      }
    });
  }
  pageChanged(event){
    // window.scroll(0,0);
    this.config.currentPage = event;
  } 
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.isSubscribing = false;
  }

}
