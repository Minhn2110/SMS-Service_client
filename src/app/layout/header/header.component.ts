import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { Store } from '@ngrx/store';
import * as profileSelector from '../../profile/state/profile.selector'
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'sms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private store: Store,
    public dialog: MatDialog
  ) { }

  isSubscribing: boolean;
  ngOnInit() {
    this.isSubscribing = true;
    this.store.select(profileSelector.userInfo).pipe(takeWhile(() => this.isSubscribing)).subscribe(data => console.log(data));
  }
  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '650px',
      width: '460px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.isSubscribing = false;
  }

}
