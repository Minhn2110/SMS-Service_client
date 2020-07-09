import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SubscriptionPopupComponent } from '../subscription-popup/subscription-popup.component';
import { Store } from '@ngrx/store';
import * as profileSelector from '../../profile/state/profile.selector'
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';


declare var paypal;

@Component({
  selector: 'sms-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  fee: number;
  vat: number
  total: number = 1;
  id: any;
  subscriptionType: string;
  vipAccount = {
    price: 1,
    description: 'Vip Account',
  };
  isSubscribing: boolean;
  constructor(
    private store: Store,
    private adminService: AdminService,
    private alertService: AlertService,
    private router: Router,
    private spinner: NgxSpinnerService

    // private dialogRef: MatDialogRef<SubscriptionPopupComponent>, // Import Login Dialog Component to close

  ) { }

  ngOnInit() {
    this.isSubscribing = true;
    this.getSubscribeInfo();
  }
  getSubscribeInfo() {
    this.store.select(profileSelector.subscribeInfo).pipe(takeWhile(() => this.isSubscribing)).subscribe(obj => {
      if (obj) {
        this.fee = Number(obj.subscribePrice);
        this.vat = 0.2 * Number(obj.subscribePrice);;
        this.total = this.fee + this.vat;
        this.subscriptionType = obj.subscriptionPlan;
        this.id = obj.id;
        console.log(this.total);
        this.integratePaypal();
      }
    });
  }
  integratePaypal(): void {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: 'SMS Online Services Payment',
                amount: {
                  currency_code: 'USD',
                  value: this.total.toFixed(2)
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          let length = 0;
          if (this.subscriptionType == 'Basic') {
            length = 1;
          } else if (this.subscriptionType == 'Standard') {
            length = 3;
          } else if (this.subscriptionType == 'Extended') {
            length = 12;
          }
          console.log('paypal', order);
          setTimeout(() => {
            if (this.id) {
              this.adminService.subscribeServices(this.id, length).subscribe(data => {
                if (data) {
                  this.alertService.successCounterup('Online SMS Services', 'Subscription Success !!!');
                  setTimeout(() => {
                    this.router.navigate(['/invoice']);
                  }, 2100);
                }
              });
            } else {
              this.adminService.smsExtendServices(this.fee).subscribe(data => {
                if (data) {
                  this.alertService.successCounterup('Online SMS Services', 'SMS Extend Success !!!');
                  setTimeout(() => {
                    this.router.navigate(['/invoice']);
                  }, 2100);
                }
              });
            }
          }, 2500);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

  ngOnDestroy(): void {
    this.isSubscribing = false;
  }


}
