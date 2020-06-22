import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileRoutingModule } from './profile.route';
import { PostAnonymousMsgComponent } from './post-anonymous-msg/post-anonymous-msg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FriendListComponent } from './friend-list/friend-list.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PostAnonymousMsgComponent,
    FriendListComponent,
    ProfileComponent

  ],
  imports: [ CommonModule,
    ProfileRoutingModule,
    FormsModule, ReactiveFormsModule,
  ],
  exports: [],
  providers: [],
})
export class ProfileModule {}