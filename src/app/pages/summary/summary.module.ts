import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { CampaignWiseComponent } from './campaign-wise/campaign-wise.component';
import { DateWiseComponent } from './date-wise/date-wise.component';
import { MonthlyWiseComponent } from './monthly-wise/monthly-wise.component';
import { SummaryRoutingModule } from './summary.routing.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    SummaryComponent,
    CampaignWiseComponent,
    DateWiseComponent,
    MonthlyWiseComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    NgxPaginationModule
  ]
})
export class SummaryModule { }
