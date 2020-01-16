import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Arrayz2PageRoutingModule } from './arrayz2-routing.module';

import { Arrayz2Page } from './arrayz2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Arrayz2PageRoutingModule
  ],
  declarations: [Arrayz2Page]
})
export class Arrayz2PageModule {}
