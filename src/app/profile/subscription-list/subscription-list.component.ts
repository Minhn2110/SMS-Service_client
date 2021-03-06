import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import swal from 'sweetalert2';
import { AlertService } from 'src/app/services/alert.service';
import { Store } from '@ngrx/store';
import * as profileSelector from '../../profile/state/profile.selector'
import * as ProfileActions from '../../profile/state/profile.actions';
import { MatDialog } from '@angular/material/dialog';
import { SubscriptionPopupComponent } from '../subscription-popup/subscription-popup.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'sms-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent implements OnInit {
  subscriptionList: any;

  constructor(
    private adminService: AdminService,
    private alertService: AlertService,
    private store: Store,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService


  ) {
   }

  ngOnInit() {
    this.getSubscriptionList();
  }

  getSubscriptionList() {
    this.spinner.show();
    this.store.dispatch(ProfileActions.ProfileGetSubscribeService({status: null}));
    this.store.select(profileSelector.subscribeList).subscribe(list => {
      console.log('subscription list', list);
      if (list) {
        this.subscriptionList = list;
        this.spinner.hide();
      }
    })
  }
  // enterSubscriptionLength(id) {
  //   console.log(id);
  //   swal.fire({
  //     title: 'Please enter your days',
  //     input: 'text',
  //     width: '40em',
  //     inputAttributes: {
  //       autocapitalize: 'off'
  //     },
  //     showCancelButton: true,
  //     confirmButtonText: 'Submit',
  //     showLoaderOnConfirm: true,
  //     customClass: {
  //       title: 'phone-verification-header',
  //       input: 'input-text with-border',
  //       confirmButton: 'button'
  //     },
  //     allowOutsideClick: () => !swal.isLoading()
  //   }).then((result) => {
  //     console.log('result', result)
  //     if (result.value) {
  //       this.adminService.subscribeServices(id, result.value).subscribe(data => {
  //         if (data) {
  //           this.alertService.successCounterup('Subscription', 'Subscription Success !!!');
  //           this.store.dispatch(ProfileActions.ProfileGetSubscribeService({status: null}));
  //         }
  //       })
  //     } else {
  //       this.alertService.error('Please enter days');
  //     }
  //   })
  // }
  unsubscribeService(id) {
    this.adminService.unSubscribeServices(id).subscribe(res => {
      console.log(res);
      this.spinner.show();
      this.store.dispatch(ProfileActions.ProfileGetSubscribeService({status: null}));
      this.alertService.successCounterup('Subscription', 'UnSubscription Success !!!');
    })
  }

  openDialog(itemPrice, itemId) {
    const dialogRef = this.dialog.open(SubscriptionPopupComponent, {
      height: '600px',
      width: '1050px',
      data: {
        price: itemPrice,
        id: itemId,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
