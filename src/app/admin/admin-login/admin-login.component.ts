import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService } from 'src/app/services/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'sms-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginAdminForm: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private router: Router,




  ) { }

  ngOnInit() {
    this.loginAdminForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  get l() { return this.loginAdminForm.controls; }

  onLogin() {
    console.log(this.loginAdminForm);
    if (this.loginAdminForm.invalid) {
      this.alertService.error('Please recheck your data');
      return;
    } else {
      this.authenticationService.login(this.l.email.value, this.l.password.value).pipe(first())
        .subscribe(
          data => {
            if (data) {
              console.log('login', data);
            }
            this.alertService.successCounterup('Login', 'Login Success');
            setTimeout(() => {
              this.router.navigate(['/admin/user-list']);
            }, 3000);
            // this.router.navigate([this.returnUrl]);
          },
          error => {
            console.log(error);
            // this.error = error.error_description;
            // this.loading = false;
          });
    }
  }
}
