import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'sms-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private adminService: AdminService
  ) { }

  totalFriend: any;
  isSubscribing: boolean;
  ngOnInit() {
    this.isSubscribing = true;
    this.getReceiveFriend();
    this.getReceiveFriendUpdate();
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/client/home']);
  }
  getReceiveFriend() {
    this.adminService.getFriendList(false, '', true, 1, 10).subscribe(friends => {
      console.log(friends);
      if (friends) {
        this.totalFriend = friends.length;
      }
    });
  }

  getReceiveFriendUpdate() {
    this.adminService.friendReceived$.pipe(takeWhile(() => this.isSubscribing)).subscribe(res => {
      console.log(res);
      // if (res) {
        this.totalFriend = res;
      // }
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.isSubscribing = false;
  }
}
