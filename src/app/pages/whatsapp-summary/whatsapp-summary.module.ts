import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappSummaryComponent } from './whatsapp-summary.component';
import { WhatsappSummaryRoutingModule } from './whatsapp-summary.routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ApprovedTemplatesComponent } from './approved-templates/approved-templates.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { PendingTemplatesComponent } from './pending-templates/pending-templates.component';



@NgModule({
  declarations: [
    WhatsappSummaryComponent,
    ApprovedTemplatesComponent,
    PendingTemplatesComponent,
    CreateTemplateComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    WhatsappSummaryRoutingModule
  ]
})
export class WhatsappSummaryModule { }
