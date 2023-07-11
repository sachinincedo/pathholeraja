import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallFeatureRoutingModule } from './call-feature-routing.module';
import { IncomingCallComponent } from './incoming-call/incoming-call.component';
import { OutgoingCallComponent } from './outgoing-call/outgoing-call.component';


@NgModule({
  declarations: [
    IncomingCallComponent, 
    OutgoingCallComponent],
  imports: [
    CommonModule,
    CallFeatureRoutingModule
  ]
})
export class CallFeatureModule { }
