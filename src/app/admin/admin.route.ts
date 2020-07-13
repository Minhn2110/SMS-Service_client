import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminComponent } from './admin.component';
import { PageNotFoundComponent } from '../layout/page-not-found/page-not-found.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '', 
    component: AdminComponent,
    children: [
      { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard]},
      { path: '', redirectTo: '/admin/login', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
