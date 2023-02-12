import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CreditLogComponent } from './credit-log/credit-log.component';
import { SettingsRoutingModule } from './settings.routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SettingsComponent } from './settings.component';



@NgModule({
  declarations: [
    SettingsComponent,
    ProfileUpdateComponent,
    ChangePasswordComponent,
    CreditLogComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NgxPaginationModule
  ]
})
export class SettingsModule { }
