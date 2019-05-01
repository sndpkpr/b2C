import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {TieredMenuModule} from 'primeng/tieredmenu';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    TieredMenuModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
