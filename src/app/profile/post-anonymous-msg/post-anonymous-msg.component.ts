import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as profileSelector from '../../profile/state/profile.selector';
import * as ProfileActions from '../../profile/state/profile.actions';

@Component({
  selector: 'sms-post-anonymous-msg',
  templateUrl: './post-anonymous-msg.component.html',
  styleUrls: ['./post-anonymous-msg.component.css']
})
export class PostAnonymousMsgComponent implements OnInit {
  postAnonymousMsgForm: FormGroup
  friendId: any;
  currentFriendArray: any[] = [];
  currentFriend: any;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private route: ActivatedRoute, 
    private store: Store,

    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {

    this.friendId = this.route.snapshot.paramMap.get('id');
    console.log(this.friendId)
    this.store.select(profileSelector.friendList).subscribe(friends => {
      console.log('a', friends);
      if (friends && friends.length > 0) {
        this.currentFriendArray = friends;
        this.currentFriendArray = this.currentFriendArray.filter(x => x.Id == this.friendId);
        this.currentFriend = this.currentFriendArray[0];
        console.log(this.currentFriend);
      }
    })
    this.postAnonymousMsgForm = this.formBuilder.group({
      phoneNumber: [`${this.currentFriend ? this.currentFriend.PhoneNumber : '' }`, Validators.required],
      content: ['', Validators.required],
    });
    this.adminService.getUserInfo().subscribe(data => console.log(data));
  }
  get f() {
    return this.postAnonymousMsgForm.controls;
  }
  onSubmit() {
    console.log(this.f);
    alert('a');
    if (this.postAnonymousMsgForm.invalid) {
      alert('invalid');
      return;
    } else {
      let currentUser = this.authenticationService.currentUserValue;
      console.log(currentUser);

      const body = {
        phoneNumber: this.f.phoneNumber.value,
        message: this.f.content.value,
        userId: null
      }
      this.adminService.sendAnonymousMsg(body).pipe().subscribe(res => {
            if (res) {
              console.log(res);
              this.showMsg('Message', 'Message sent success !!!');
            }
            // this.router.navigate([this.returnUrl]);
            // this.router.navigate(['/dashboard']);
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
