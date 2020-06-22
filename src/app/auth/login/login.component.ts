import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';
import swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'sms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  userId: string;
  phoneNumber: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private dialogRef:MatDialogRef<LoginComponent> // Import Login Dialog Component to close
  ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      gender: [2, Validators.required],
      avartar: ['', Validators.required],
      name: ['', Validators.required],
    });
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    })

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.registerForm.controls; }
  get l() { return this.loginForm.controls; }


  onSubmit() {
    console.log(this.f);
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      alert('invalid');
      return;
    } else {
      this.loading = true;
      this.authenticationService.register(this.f.email.value, this.f.password.value, this.f.password.value, this.f.phoneNumber.value, this.f.avartar.value,
        this.f.name.value, parseInt(this.f.gender.value))
        .pipe(first())
        .subscribe(
          data => {
            if (data) {
              console.log(data);
              this.userId = data.UserId;
              this.verificationPhoneNumber();
            }
            // this.router.navigate([this.returnUrl]);
            // this.router.navigate(['/dashboard']);
          },
          error => {
            console.log(error);
            this.error = error.error_description;
            this.loading = false;
          });
    }
  }
  onLogin() {
    console.log(this.loginForm);
    if (this.loginForm.invalid) {
      alert('invalid');
      return;
    } else {
      this.authenticationService.login(this.l.name.value, this.l.password.value).pipe(first())
        .subscribe(
          data => {
            if (data) {
              console.log('login', data);
            }
            this.dialogRef.close();
            // this.router.navigate([this.returnUrl]);
            this.router.navigate(['/profile/post-anonymous']);
          },
          error => {
            console.log(error);
            this.error = error.error_description;
            this.loading = false;
          });
    }
  }
  verificationPhoneNumber() {
    swal.fire({
      title: 'Please submit your code !!!',
      input: 'text',
      width: '22em',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      customClass: {
        title: 'phone-verification-header',
        input: 'input-text with-border',
        confirmButton: 'button'
      },
      allowOutsideClick: () => !swal.isLoading()
    }).then((result) => {
      console.log('result', result)
      if(result.value) {
        this.authenticationService.phoneVerification( this.userId, result.value).subscribe(data =>
          {
            if (data) {
              this.showMsg('Register', 'Register Success !!!');
              this.dialogRef.close();
              // setTimeout(() => {
              //   this.router.navigate(['/client/home']);
              // }, 1500);
            }
          })
      } else {
        // this.showMsg('Invalid', 'No code send');
      }
      // if (result.value) {
      //   swal.fire({
      //     title: `${result.value.login}'s avatar`,
      //     imageUrl: result.value.avatar_url
      //   })
      // }
    })
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

  phoneVerificationApi() {
    console.log(this.phoneNumber);
  }
}
