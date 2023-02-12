import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovedTemplatesComponent } from './approved-templates/approved-templates.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { PendingTemplatesComponent } from './pending-templates/pending-templates.component';
import { WhatsappSummaryComponent } from './whatsapp-summary.component';

const routes: Routes = [
    {
        path: '',
        component: WhatsappSummaryComponent,
        children: [{
            path: 'approved-templates',
            component: ApprovedTemplatesComponent
        }, {
            path: 'pending-templates',
            component: PendingTemplatesComponent
        }, {
            path: 'create-template',
            component: CreateTemplateComponent
        }, {
            path: '',
            redirectTo: 'approved-templates',
            pathMatch: 'full'
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WhatsappSummaryRoutingModule { }
