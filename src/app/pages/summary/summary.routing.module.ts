import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignWiseComponent } from './campaign-wise/campaign-wise.component';
import { DateWiseComponent } from './date-wise/date-wise.component';
import { MonthlyWiseComponent } from './monthly-wise/monthly-wise.component';
import { SummaryComponent } from './summary.component';

const routes: Routes = [
    {
        path: '',
        component: SummaryComponent,
        children: [
            {
                path: 'campaign-wise',
                component: CampaignWiseComponent
            },
            {
                path: 'date-wise',
                component: DateWiseComponent
            },
            {
                path: 'monthly-wise',
                component: MonthlyWiseComponent
            }, {
                path: '',
                redirectTo: 'campaign-wise',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SummaryRoutingModule { }
