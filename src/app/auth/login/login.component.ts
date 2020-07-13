import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first, delay, finalize } from 'rxjs/operators';
import swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'sms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  loginForm: FormGroup;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  userId: string;
  phoneNumber: string;
  currentDate: any;
  file: File;
  fileName: string;
  fb;
  downloadURL: Observable<string>;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private dialogRef: MatDialogRef<LoginComponent>, // Import Login Dialog Component to close
    private storage: AngularFireStorage

  ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      gender: [1, Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      avatar: ['', Validators.required],
    }, {
      validator: this.MustMatch('password', 'confirmPassword')
    });
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    })

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

  get f() { return this.registerForm.controls; }
  get l() { return this.loginForm.controls; }


  onSubmit() {
    console.log(this.f);
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log(this.registerForm);
      this.alertService.error('Please recheck your data');
      return;
    } else {
      this.loading = true;
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
                this.authenticationService.register(
                  this.f.email.value, this.f.password.value, this.f.password.value, this.f.phoneNumber.value.e164Number, this.fb,
                  this.f.name.value, parseInt(this.f.gender.value), this.f.address.value
                )
                  .pipe(first())
                  .subscribe(
                    data => {
                      if (data) {
                        console.log(data);
                        this.userId = data.UserId;
                        this.verificationPhoneNumber();
                      }
                    },
                    error => {
                      console.log(error);
                      this.error = error.error_description;
                      this.loading = false;
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

    }
  }
  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }
  uploadAvatar(e) {
    this.currentDate = Date.now();
    this.file = e.target.files[0];
    this.fileName = e.target.files[0].name;
    this.registerForm.controls['avatar'].setValue(this.file ? this.file.name : '');
    console.log(this.registerForm.get(['avatar']).value);
  }
  // sendImageToFirebase() {
  //   const filePath = `ProjectImage/${this.currentDate}`;
  //   const fileRef = this.storage.ref(filePath);
  //   const task = this.storage.upload(`ProjectImage/${this.currentDate}`, this.file);
  //   task
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         this.downloadURL = fileRef.getDownloadURL();
  //         this.downloadURL.subscribe(url => {
  //           if (url) {
  //             this.fb = url;
  //           }
  //           console.log('link', this.fb);
  //         });
  //       })
  //     )
  //     .subscribe(url => {
  //       if (url) {
  //         console.log('url', url);
  //       }
  //     });
  // }
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
            this.alertService.successCounterup('Login', 'Login Success');
            setTimeout(() => {
              this.router.navigate(['/profile/post-anonymous']);
            }, 3000);
            // this.router.navigate([this.returnUrl]);
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
      if (result.value) {
        this.authenticationService.phoneVerification(this.userId, result.value).subscribe(data => {
          if (data) {
            this.alertService.successCounterup('Register', 'Register Success, please Sign in again .');
            this.dialogRef.close()
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

  phoneVerificationApi() {
    console.log(this.phoneNumber);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('destroy');
  }
}
