import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommoncomponentsRoutingModule } from './commoncomponents-routing.module';
import { FooterComponent } from './footer/footer.component';
import { ComponentsModule } from '../components/components.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FooterComponent, SearchBarComponent],
  imports: [
    CommonModule,
    CommoncomponentsRoutingModule,
    FormsModule
  ],
  exports:[
    FooterComponent,
    SearchBarComponent
  ]
})
export class CommoncomponentsModule { }
