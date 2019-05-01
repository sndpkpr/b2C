import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GlobalComponent } from './global.component';
import { HomeComponent } from './components/home/home.component';

const globalRoutes: Routes = [
  {
    path: '',
    component: GlobalComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(globalRoutes)
  ],
  exports: [RouterModule]
})
export class GlobalRoutingModule { }
