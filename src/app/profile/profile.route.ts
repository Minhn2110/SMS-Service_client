import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostAnonymousMsgComponent } from './post-anonymous-msg/post-anonymous-msg.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendSuggestionComponent } from './friend-suggestion/friend-suggestion.component';
import { AuthGuard } from '../auth/auth.guard';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { FriendReiceveComponent } from './friend-reiceve/friend-reiceve.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'post-anonymous', component: PostAnonymousMsgComponent, canActivate: [AuthGuard] },
  { path: 'friend-list', component: FriendListComponent, canActivate: [AuthGuard] },
  { path: 'friend-suggestion', component: FriendSuggestionComponent, canActivate: [AuthGuard] },
  { path: 'friend-request', component: FriendRequestComponent },
  { path: 'friend-reiceve', component: FriendReiceveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
