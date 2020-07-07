import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'sms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:  any;
  constructor(
    public dialog: MatDialog,
    private authenticationService: AuthenticationService
  ) { }

  isSubscribing: boolean;
  isUserInfo: boolean;
  ngOnInit() {
    this.isSubscribing = true;
    this.isUserInfo = false;
    this.isLoggedIn();
  }
  isLoggedIn() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.user);
    if (this.user) {
      this.isUserInfo = true;
    } else {
      this.isUserInfo = false;
    }
  }
  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '650px',
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  logout() {
    this.authenticationService.logout();
    this.isLoggedIn();
  }
  ngOnDestroy(): void {
    this.isSubscribing = false;
  }

}
