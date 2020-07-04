import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

declare var paypal;

@Component({
  selector: 'sms-subscription-popup',
  templateUrl: './subscription-popup.component.html',
  styleUrls: ['./subscription-popup.component.css']
})
export class SubscriptionPopupComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  vipAccount = {
    price: 70,
    description: 'Vip Account',
  };
  constructor(
    public dialog: MatDialog

  ) { }

  ngOnInit() {
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
          // this.showMsg('Payment Successful !!!', 'This message will close in <b></b> milliseconds.');
          alert('success')
          console.log('paypal', order);
          setTimeout(() => {
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
