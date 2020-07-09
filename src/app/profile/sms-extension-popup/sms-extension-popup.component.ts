import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert.service';
import * as ProfileActions from '../../profile/state/profile.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'sms-sms-extension-popup',
  templateUrl: './sms-extension-popup.component.html',
  styleUrls: ['./sms-extension-popup.component.scss']
})
export class SmsExtensionPopupComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private alertService: AlertService,
    private store: Store,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit() {
  }
  goToCheckout(price, Subscibetype: any) {
    this.alertService.successCounterup('Online SMS Services', 'Proceed to check out page !!!');
    setTimeout(() => {
      this.router.navigate(['/profile/checkout']);
    }, 2100);
    this.dialog.closeAll();
    this.store.dispatch(ProfileActions.ProfileSubscriptionPrice({id: null, price: price, subscriptionPlan: Subscibetype}));
  }

}
