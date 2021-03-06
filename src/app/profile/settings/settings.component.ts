import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as profileSelector from '../../profile/state/profile.selector'
import { takeWhile, finalize, first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AdminService } from 'src/app/services/admin.service';
import * as ProfileActions from '../../profile/state/profile.actions';
import { AlertService } from 'src/app/services/alert.service';
import { MatDialog } from '@angular/material/dialog';
import { SmsExtensionPopupComponent } from '../sms-extension-popup/sms-extension-popup.component';

@Component({
  selector: 'sms-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingForm: FormGroup;

  isSubscribing: boolean;
  name: string;
  avatar: string;
  accountBalance: any;
  currentDate: any;
  file: File;
  fileName: string;
  fb;
  downloadURL: Observable<string>;
  user: any;
  email: any;
  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage,
    private authenticationService: AuthenticationService,
    private adminService: AdminService,
    private alertService: AlertService,
    public dialog: MatDialog,


  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if (this.user) {
      this.email = this.user.userName;
      console.log(this.email);
    }

    this.settingForm = this.formBuilder.group({
      firstName: ['', Validators.required],
    })
    this.isSubscribing = true;
    this.store.select(profileSelector.userInfo).pipe(takeWhile(() => this.isSubscribing)).subscribe(data => {
      console.log(data);
      if (data) {
        this.name = data.Name;
        this.avatar = data.Avatar;
        this.accountBalance = data.Balance;
      }
    });
  }
  get f() { return this.settingForm.controls; }

  onSubmit() {
    console.log(this.f);

    // stop here if form is invalid
    if (this.settingForm.invalid) {
      this.alertService.error('Please recheck your data');
      return;
    } else {
      if (this.file) {
        // If update Avatar
        const filePath = `ProjectImage/${this.currentDate}`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(`ProjectImage/${this.currentDate}`, this.file);
        task
          .snapshotChanges()
          .pipe(
            finalize(() => {
              this.downloadURL = fileRef.getDownloadURL();
              this.downloadURL.subscribe(url => {
                if (url) {
                  this.fb = url;
                  const body = {
                    Name: this.name,
                    Avatar: this.fb,
                    DOB: "2015-05-02T00:00:00"
                  }
                  this.adminService.editProfile(body).subscribe(

                    data => {
                      this.alertService.success('Update Profile success.');
                      this.store.dispatch(ProfileActions.ProfileGetUserInfo());
                    },
                    error => {
                      console.log(error);
                    });
                }
                console.log('link', this.fb);
              });
            })
          )
          .subscribe(url => {
            if (url) {
              console.log('url', url);
            }
          });
      } else {
        const body = {
          Name: this.name,
          Avatar: this.avatar,
          DOB: "2015-05-02T00:00:00"
        }
        this.adminService.editProfile(body).subscribe(data => {
          this.alertService.success('Update Profile success.');
          this.store.dispatch(ProfileActions.ProfileGetUserInfo());
        },
          error => {
            console.log(error);
          });
      }


    }
  }
  uploadAvatar(e) {
    this.currentDate = Date.now();
    this.file = e.target.files[0];
    this.fileName = e.target.files[0].name;
    console.log(this.file);
  }
  openDialog() {
    const dialogRef = this.dialog.open(SmsExtensionPopupComponent, {
      height: '630px',
      width: '1050px',
      // data: {
      //   price: itemPrice,
      //   id: itemId,
      // }
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
