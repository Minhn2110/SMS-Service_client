import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'sms-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.css']
})
export class ProfileLayoutComponent implements OnInit {
  isLayout: boolean;
  isSubscribing: boolean = true;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // this.activatedRoute.url.pipe(takeWhile(() => this.isSubscribing)).subscribe(url => {
    //   if (this.router.url === '/profile/invoice') {
    //     this.isLayout = false;
    //   } else {
    //     this.isLayout = true;
    //   }
    // });

  }

  ngOnInit() {
    // this.isLayout = true;
    // console.log(this.router.url)
    // if (this.router.url === '/profile/invoice') {
    //   this.isLayout = false;
    // } else {
    //   this.isLayout = true;
    // }
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.isSubscribing = false;
  }

}
