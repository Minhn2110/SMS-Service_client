import { Component, OnInit, Injector, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import * as profileSelector from '../../profile/state/profile.selector'
import { takeWhile } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'sms-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  fee: number;
  vat: number
  total: number;
  id: any;
  userName: string;
  subscriptionType: string;
  currentDate: string;
  isSubscribing: boolean;

  constructor(
    private store: Store,
    private router: Router,
    private injector: Injector

  ) { }

  ngOnInit() {
    this.isSubscribing = true;
    this.getSubscribeInfo();
    this.getUserInfo();
    this.getCurrentdate();
  }

 getSubscribeInfo() {
  this.store.select(profileSelector.subscribeInfo).pipe(takeWhile(() => this.isSubscribing)).subscribe(obj => {
    if (obj) {
      this.fee = obj.subscribePrice;
      this.vat = 0.2 * obj.subscribePrice;
      this.total = this.fee + this.vat;
      this.subscriptionType = obj.subscriptionPlan;
      // this.id = obj.id;
      console.log(this.id);
    }
  });
 }
 getUserInfo() {
  this.store.select(profileSelector.userInfo).subscribe(data => {
    if (data) {
      this.userName = data.Name;
    }
  });
}
  getCurrentdate() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    let dateObj = new Date();
    let month = monthNames[dateObj.getMonth()];
    let day = String(dateObj.getDate()).padStart(2, '0');
    let year = dateObj.getFullYear();
    this.currentDate = day + ' ' + month + ',' + year;
  }
  goBack() {
    const routerService = this.injector.get(Router);
    const ngZone = this.injector.get(NgZone);
    ngZone.run(() => {
      this.router.navigate(['/client/home']);
    });
  }
  ngOnDestroy(): void {
    this.isSubscribing = false;
  }


}
