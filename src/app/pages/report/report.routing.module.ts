import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecievedAfterComponent } from './recieved-after/recieved-after.component';
import { RecievedWithinComponent } from './recieved-within/recieved-within.component';
import { ReportComponent } from './report.component';
import { SentComponent } from './sent/sent.component';

const routes: Routes = [
    {
        path: '',
        component: ReportComponent,
        children: [
            {
                path: 'sent',
                component: SentComponent
            },
            {
                path: 'recieved-after-24',
                component: RecievedAfterComponent
            },
            {
                path: 'recieved-within-24',
                component: RecievedWithinComponent
            }, {
                path: '',
                redirectTo: 'sent',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportRoutingModule { }
