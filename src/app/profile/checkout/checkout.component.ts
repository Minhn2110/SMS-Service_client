import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SubscriptionPopupComponent } from '../subscription-popup/subscription-popup.component';
import { Store } from '@ngrx/store';
import * as profileSelector from '../../profile/state/profile.selector'
import { AdminService } from 'src/app/services/admin.service';
import { AlertService } from 'src/app/services/alert.service';


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
  total: number;
  id: any;
  subscriptionType: string;
  vipAccount = {
    price: 70,
    description: 'Vip Account',
  };
  constructor(
    private store: Store,
    private adminService: AdminService,
    private alertService: AlertService,
    // private dialogRef: MatDialogRef<SubscriptionPopupComponent>, // Import Login Dialog Component to close

  ) { }

  ngOnInit() {
    this.store.select(profileSelector.subscribeInfo).subscribe(obj => {
      if (obj) {
        this.fee = obj.subscribePrice;
        this.vat = 0.2 * obj.subscribePrice;
        this.total = this.fee + this.vat;
        this.subscriptionType = obj.subscriptionPlan;
        this.id = obj.id; 
        console.log(this.id);
      }
    });
    this.integratePaypal();

  }
  integratePaypal(): void {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.vipAccount.description,
                amount: {
                  currency_code: 'USD',
                  value: this.vipAccount.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          let length = 0;
          if (this.subscriptionType == 'Basic') {
            length = 30;
          } else if (this.subscriptionType == 'Standard') {
            length = 60;
          } else if (this.subscriptionType == 'Extended') {
            length = 365;
          }
          // this.showMsg('Payment Successful !!!', 'This message will close in <b></b> milliseconds.');
          alert('success')
          console.log('paypal', order);
          setTimeout(() => {
            this.adminService.subscribeServices(this.id, length).subscribe(data => {
              if (data) {
                this.alertService.successCounterup('Subscription', 'Subscription Success !!!');
              }
            })
            // this.upgradeAccount();
          }, 2500);
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }


}
