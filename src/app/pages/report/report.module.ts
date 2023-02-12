import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report.routing.module';
import { ReportComponent } from './report.component';
import { SentComponent } from './sent/sent.component';
import { RecievedAfterComponent } from './recieved-after/recieved-after.component';
import { RecievedWithinComponent } from './recieved-within/recieved-within.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ReportComponent,
    SentComponent,
    RecievedAfterComponent,
    RecievedWithinComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    NgxPaginationModule
  ]
})
export class ReportModule { }
