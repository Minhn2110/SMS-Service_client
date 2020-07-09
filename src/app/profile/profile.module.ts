import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileRoutingModule } from './profile.route';
import { PostAnonymousMsgComponent } from './post-anonymous-msg/post-anonymous-msg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FriendListComponent } from './friend-list/friend-list.component';
import { ProfileComponent } from './profile.component';
import { FriendSuggestionComponent } from './friend-suggestion/friend-suggestion.component';
import { FriendLayoutComponent } from './friend-layout/friend-layout.component';
import { StoreModule } from '@ngrx/store';
import { profileReducer } from './state/profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './state/profile.effects';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { FriendReiceveComponent } from './friend-reiceve/friend-reiceve.component';
import { SettingsComponent } from './settings/settings.component';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileLayoutComponent } from '../layout/profile-layout/profile-layout.component';
import { HeaderComponent } from '../layout/header/header.component';
import { HeaderAdminComponent } from '../layout/header-admin/header-admin.component';
import { SidebarAdminComponent } from '../layout/sidebar-admin/sidebar-admin.component';
import { FooterAdminComponent } from '../layout/footer-admin/footer-admin.component';
import { NgxPaginationModule } from 'ngx-pagination'
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
@NgModule({
  declarations: [
    ProfileLayoutComponent,
    DashboardComponent,
    PostAnonymousMsgComponent,
    FriendListComponent,
    FriendSuggestionComponent,
    FriendRequestComponent,
    FriendLayoutComponent,
    FriendReiceveComponent,
    SettingsComponent,
    SubscriptionListComponent,
    ProfileComponent,
    CheckoutComponent,
    HeaderAdminComponent,

    SidebarAdminComponent,
    FooterAdminComponent,

  ],
  imports: [CommonModule,
    ProfileRoutingModule,
    FormsModule, ReactiveFormsModule,
    StoreModule.forFeature('profile', profileReducer),
    EffectsModule.forFeature([ProfileEffects]),
    NgxSpinnerModule,
    NgxIntlTelInputModule,
    NgxPaginationModule

  ],
  exports: [],
  providers: [],
})
export class ProfileModule { }