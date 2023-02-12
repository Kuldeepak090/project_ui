import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './core/auth.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: LayoutComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module')
          .then(m => m.DashboardModule)
      },
      {
        path: 'templates', loadChildren: () => import('./pages/whatsapp-summary/whatsapp-summary.module')
          .then(m => m.WhatsappSummaryModule)
      },
      {
        path: 'messaging', loadChildren: () => import('./pages/messaging/messaging.module')
          .then(m => m.MessagingModule)
      },
      {
        path: 'users', loadChildren: () => import('./pages/users/users.module')
          .then(m => m.UsersModule)
      },
      {
        path: 'summary', loadChildren: () => import('./pages/summary/summary.module')
          .then(m => m.SummaryModule)
      },
      {
        path: 'report', loadChildren: () => import('./pages/report/report.module')
          .then(m => m.ReportModule)
      },
      {
        path: 'settings', loadChildren: () => import('./pages/settings/settings.module')
          .then(m => m.SettingsModule)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
