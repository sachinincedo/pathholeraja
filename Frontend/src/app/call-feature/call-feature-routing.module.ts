import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomingCallComponent } from './incoming-call/incoming-call.component';
import { OutgoingCallComponent } from './outgoing-call/outgoing-call.component';

const routes: Routes = [
  {
    path: 'incoming-call',
    component: IncomingCallComponent
  },
  {
    path:'outgoing-call',
    component: OutgoingCallComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallFeatureRoutingModule { }
