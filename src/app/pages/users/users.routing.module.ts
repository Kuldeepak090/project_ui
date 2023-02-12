import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginHistoryComponent } from './login-history/login-history.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {
                path: 'login-history',
                component: LoginHistoryComponent
            },
            {
                path: 'manage-user',
                component: ManageUserComponent
            }, {
                path: '',
                redirectTo: 'login-history',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
