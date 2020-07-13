import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { NormalLayoutComponent } from './layout/normal-layout/normal-layout.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { InvoiceComponent } from './profile/invoice/invoice.component';


const routes: Routes = [
  {
    path: 'client', component: NormalLayoutComponent, // Prefix
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'}, // Redirect route client empty to home/client
      { path: 'home', component: HomeComponent },
      { path: 'pages-404', component: PageNotFoundComponent },
    ]
  },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard]},
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'admin',loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'invoice', component: InvoiceComponent },
  { path: '', redirectTo: '/client/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/client/pages-404' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
