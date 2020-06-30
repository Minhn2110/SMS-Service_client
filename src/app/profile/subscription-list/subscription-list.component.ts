import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import swal from 'sweetalert2';
import { AlertService } from 'src/app/services/alert.service';
import { Store } from '@ngrx/store';
import * as profileSelector from '../../profile/state/profile.selector'
import * as ProfileActions from '../../profile/state/profile.actions';

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
    private store: Store

  ) { }

  ngOnInit() {
    this.getSubscriptionList();
  }

  getSubscriptionList() {
    this.store.dispatch(ProfileActions.ProfileGetSubscribeService({status: null}));
    this.store.select(profileSelector.subscribeList).subscribe(list => {
      console.log('list', list);
      this.subscriptionList = list;
    })
  }
  enterSubscriptionLength(id) {
    console.log(id);
    swal.fire({
      title: 'Please enter your days',
      input: 'text',
      width: '40em',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      customClass: {
        title: 'phone-verification-header',
        input: 'input-text with-border',
        confirmButton: 'button'
      },
      allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
      console.log('result', result)
      if (result.value) {
        this.adminService.subscribeServices(id, result.value).subscribe(data => {
          if (data) {
            this.alertService.successCounterup('Subscription', 'Subscription Success !!!');
            this.store.dispatch(ProfileActions.ProfileGetSubscribeService({status: null}));
          }
        })
      } else {
        this.alertService.error('Please enter days');
      }
    })
  }
  unsubscribeService(id) {
    this.adminService.unSubscribeServices(id).subscribe(res => {
      console.log(res);
      this.store.dispatch(ProfileActions.ProfileGetSubscribeService({status: null}));
      this.alertService.successCounterup('Subscription', 'UnSubscription Success !!!');
    })
  }

}
