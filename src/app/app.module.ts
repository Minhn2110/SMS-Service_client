import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FeatureModule } from './feature/feature.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NormalLayoutComponent } from './layout/normal-layout/normal-layout.component';
// import { ProfileLayoutComponent } from './layout/profile-layout/profile-layout.component'; 
import { SidebarAdminComponent } from './layout/sidebar-admin/sidebar-admin.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { FooterAdminComponent } from './layout/footer-admin/footer-admin.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

// NgrX
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/app.reducer';
import { EffectsModule } from '@ngrx/effects';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SubscriptionPopupComponent } from './profile/subscription-popup/subscription-popup.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

import { ChartsModule } from 'ng2-charts';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InvoiceComponent } from './profile/invoice/invoice.component';
import { SmsExtensionPopupComponent } from './profile/sms-extension-popup/sms-extension-popup.component';
import { SharedModule } from './shared.module';

const firebaseConfig = {
  apiKey: "AIzaSyBBignCfPEtIIGntZzCpopvW0ZaJ_vl0SQ",
  authDomain: "testsmartfund.firebaseapp.com",
  databaseURL: "https://testsmartfund.firebaseio.com",
  projectId: "testsmartfund",
  storageBucket: "testsmartfund.appspot.com",
  messagingSenderId: "852175374861",
  appId: "1:852175374861:web:904159eb09735d43"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NormalLayoutComponent,
    SubscriptionPopupComponent,
    AdminLoginComponent,
    SmsExtensionPopupComponent,
    InvoiceComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FeatureModule,
    SharedModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    StoreModule.forRoot({ count: counterReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    SimplebarAngularModule,
    AngularFireModule.initializeApp(firebaseConfig),
		AngularFirestoreModule, // firestore
		AngularFireAuthModule, // auth
    AngularFireStorageModule,
    ChartsModule,
    NgxIntlTelInputModule,
    NgxSpinnerModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ], bootstrap: [AppComponent],
  entryComponents: [LoginComponent, SubscriptionPopupComponent, SmsExtensionPopupComponent],
})
export class AppModule { }
