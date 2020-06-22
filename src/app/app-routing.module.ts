import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { NormalLayoutComponent } from './layout/normal-layout/normal-layout.component';
import { ProfileLayoutComponent } from './layout/profile-layout/profile-layout.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'client', component: NormalLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'pages-404', component: PageNotFoundComponent },
    ]
  },
  { path: 'profile', component: ProfileLayoutComponent, loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: '', redirectTo: '/client/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/client/pages-404' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
