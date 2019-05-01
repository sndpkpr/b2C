import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../library/shared/shared.module';

import { GlobalComponent } from './global.component';
import { GlobalRoutingModule } from './global-routing.module';

import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [GlobalComponent,
    HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    GlobalRoutingModule
  ]
})
export class GlobalModule { }
