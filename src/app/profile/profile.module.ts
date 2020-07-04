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
import { counterReducer } from './state/profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './state/profile.effects';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { FriendReiceveComponent } from './friend-reiceve/friend-reiceve.component';
import { SettingsComponent } from './settings/settings.component';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
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
    CheckoutComponent

  ],
  imports: [ CommonModule,
    ProfileRoutingModule,
    FormsModule, ReactiveFormsModule,
    StoreModule.forFeature('profile', counterReducer),
    EffectsModule.forFeature([ProfileEffects])
  ],
  exports: [],
  providers: [],
})
export class ProfileModule {}