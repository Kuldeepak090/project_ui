import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users.routing.module';
import { UsersComponent } from './users.component';
import { LoginHistoryComponent } from './login-history/login-history.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    UsersComponent,
    LoginHistoryComponent,
    ManageUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NgxPaginationModule
  ]
})
export class UsersModule { }
