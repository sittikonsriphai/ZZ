import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArrayzPageRoutingModule } from './arrayz-routing.module';

import { ArrayzPage } from './arrayz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArrayzPageRoutingModule
  ],
  declarations: [ArrayzPage]
})
export class ArrayzPageModule {}
