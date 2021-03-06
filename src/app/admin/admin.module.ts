import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRoutingModule } from './admin.route';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    UserListComponent,
    AdminComponent,
  ],
  imports: [ 
    CommonModule, 
    AdminRoutingModule,
    FormsModule, ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    ChartsModule

   ],
  exports: [],
  providers: [],
})
export class AdminModule {}