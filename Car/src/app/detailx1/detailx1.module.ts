import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detailx1PageRoutingModule } from './detailx1-routing.module';

import { Detailx1Page } from './detailx1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detailx1PageRoutingModule
  ],
  declarations: [Detailx1Page]
})
export class Detailx1PageModule {}
