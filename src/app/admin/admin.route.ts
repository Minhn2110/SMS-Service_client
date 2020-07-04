import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  // { path: 'login', component: AdminLoginComponent },
  { path: 'user-list', component: UserListComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
