import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingComponent } from './messaging.component';
import { MessagingRoutingModule } from './messaging.routing.module';
import { SingleComponent } from './single/single.component';
import { MultipleComponent } from './multiple/multiple.component';



@NgModule({
  declarations: [
    MessagingComponent,
    SingleComponent,
    MultipleComponent
  ],
  imports: [
    CommonModule,
    MessagingRoutingModule
  ]
})
export class MessagingModule { }
