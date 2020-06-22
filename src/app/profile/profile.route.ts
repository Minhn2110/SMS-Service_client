import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostAnonymousMsgComponent } from './post-anonymous-msg/post-anonymous-msg.component';
import { FriendListComponent } from './friend-list/friend-list.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'post-anonymous', component: PostAnonymousMsgComponent },
  { path: 'friend-list', component: FriendListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
