import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagingComponent } from './messaging.component';
import { MultipleComponent } from './multiple/multiple.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
    {
        path: '',
        component: MessagingComponent,
        children: [
            {
                path: 'single',
                component: SingleComponent
            },
            {
                path: 'multiple',
                component: MultipleComponent
            }, {
                path: '',
                redirectTo: 'single',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessagingRoutingModule { }
