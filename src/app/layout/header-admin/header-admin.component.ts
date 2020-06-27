import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as profileSelector from '../../profile/state/profile.selector'
import * as ProfileActions from '../../profile/state/profile.actions';

@Component({
  selector: 'sms-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(
    private store: Store,

  ) { }
  avatar: string;

  ngOnInit() {
    this.store.dispatch(ProfileActions.ProfileGetUserInfo());
    this.store.select(profileSelector.userInfo).subscribe(data =>{
      // console.log(data);
      if (data) {
        this.avatar = data.Avatar;
      }
    });
  }

}
