import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as profileSelector from '../../profile/state/profile.selector'
import * as ProfileActions from '../../profile/state/profile.actions';
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sms-subscription-popup',
  templateUrl: './subscription-popup.component.html',
  styleUrls: ['./subscription-popup.component.scss']
})
export class SubscriptionPopupComponent implements OnInit {
  price: any;
  id: any;
  constructor(
    public dialog: MatDialog,
    private store: Store,
    private alertService: AlertService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any


  ) { }

  ngOnInit() {
    this.price = this.data.price;
    this.id = this.data.id
    console.log(this.price);
    console.log(this.id);
  }

  goToCheckout(price, Subscibetype: any) {
    this.alertService.successCounterup('Online SMS Services', 'Proceed to check out page !!!');
    this.dialog.closeAll();
    setTimeout(() => {
      this.router.navigate(['/profile/checkout']);
    }, 2100);
    this.store.dispatch(ProfileActions.ProfileSubscriptionPrice({id: this.id, price: price, subscriptionPlan: Subscibetype}));

    console.log(price);

  }
  

}
