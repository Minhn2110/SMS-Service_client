import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Store } from '@ngrx/store';
import * as ProfileActions from '../state/profile.actions';

@Component({
  selector: 'sms-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(ProfileActions.ProfileGetUserInfo());
    // this.adminService.getUserInfo().subscribe(data => {
    //   if (data) {
    //     console.log(data)
    //   }
    // }
    // );
  }

}
