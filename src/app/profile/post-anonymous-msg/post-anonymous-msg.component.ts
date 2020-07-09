import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as profileSelector from '../../profile/state/profile.selector';
import * as ProfileActions from '../../profile/state/profile.actions';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'sms-post-anonymous-msg',
  templateUrl: './post-anonymous-msg.component.html',
  styleUrls: ['./post-anonymous-msg.component.scss']
})
export class PostAnonymousMsgComponent implements OnInit {
  postAnonymousMsgForm: FormGroup
  friendId: any;
  currentFriendArray: any[] = [];
  currentFriend: any;
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  isFriend: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private store: Store,
    private alertService: AlertService,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.friendId = this.route.snapshot.paramMap.get('id');
    if (this.friendId) {
      this.isFriend = true;
    } else {
      this.isFriend = false;
    }
    console.log(this.friendId)
    this.store.select(profileSelector.friendList).subscribe(friends => {
      if (friends && friends.length > 0) {
        this.currentFriendArray = friends;
        this.currentFriendArray = this.currentFriendArray.filter(x => x.Id == this.friendId);
        this.currentFriend = this.currentFriendArray[0];
        console.log(this.currentFriend);
      }
    })
    this.postAnonymousMsgForm = this.formBuilder.group({
      phoneNumber: [`${this.currentFriend ? this.currentFriend.PhoneNumber : ''}`, Validators.required],
      content: ['', [Validators.required, Validators.maxLength(120)]],
    });
  }
  get f() {
    return this.postAnonymousMsgForm.controls;
  }
  onSubmit() {
    console.log(this.f);
    if (this.postAnonymousMsgForm.invalid) {
      this.alertService.error('Please recheck your data');
      return;
    } else {
      let currentUser = this.authenticationService.currentUserValue;
      console.log(currentUser);

      const body = {
        phoneNumber: this.isFriend ? this.f.phoneNumber.value : this.f.phoneNumber.value.e164Number,
        message: this.f.content.value,
        userId: null
      }
      this.adminService.sendAnonymousMsg(body).pipe().subscribe(res => {
        if (res) {
          console.log(res);
          this.showMsg('Message', res);
        }
      },
        error => {
          console.log(error);
        });
    }
  }

  showMsg(title, msg): void {
    let timerInterval
    swal.fire({
      title: title,
      html: msg,
      timer: 2000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        swal.showLoading()
        timerInterval = setInterval(() => {
          const content = swal.getContent();
          if (content) {
            const b = content.querySelector('b');
            if (b) {
              b.textContent = swal.getTimerLeft().toString();
            }
          }
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

}
