import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CreditLogComponent } from './credit-log/credit-log.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        children: [
            {
                path: 'profile-update',
                component: ProfileUpdateComponent
            },
            {
                path: 'change-password',
                component: ChangePasswordComponent
            }, {
                path: 'credit-log',
                component: CreditLogComponent
            }, {
                path: '',
                redirectTo: 'profile-update',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
