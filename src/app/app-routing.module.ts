import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { NormalLayoutComponent } from './layout/normal-layout/normal-layout.component';
import { ProfileLayoutComponent } from './layout/profile-layout/profile-layout.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { InvoiceComponent } from './profile/invoice/invoice.component';


const routes: Routes = [
  {
    path: 'client', component: NormalLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'pages-404', component: PageNotFoundComponent },
    ]
  },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard]},
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin', component: AdminComponent ,loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'invoice', component: InvoiceComponent },
  { path: '', redirectTo: '/client/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/client/pages-404' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
