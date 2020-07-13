import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostAnonymousMsgComponent } from './post-anonymous-msg/post-anonymous-msg.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendSuggestionComponent } from './friend-suggestion/friend-suggestion.component';
import { AuthGuard } from '../auth/auth.guard';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { FriendReiceveComponent } from './friend-reiceve/friend-reiceve.component';
import { SettingsComponent } from './settings/settings.component';
import { SubscriptionListComponent } from './subscription-list/subscription-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileLayoutComponent } from '../layout/profile-layout/profile-layout.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileLayoutComponent,
    children: [
      { path: 'post-anonymous', component: PostAnonymousMsgComponent, canActivate: [AuthGuard] },
      { path: 'post-anonymous/:id', component: PostAnonymousMsgComponent },
      { path: 'friend-list', component: FriendListComponent, canActivate: [AuthGuard] },
      { path: 'friend-suggestion', component: FriendSuggestionComponent, canActivate: [AuthGuard] },
      { path: 'friend-request', component: FriendRequestComponent, canActivate: [AuthGuard] },
      { path: 'friend-receive', component: FriendReiceveComponent, canActivate: [AuthGuard] },
      { path: 'manage-subscription', component: SubscriptionListComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'setting', component: SettingsComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'setting', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
