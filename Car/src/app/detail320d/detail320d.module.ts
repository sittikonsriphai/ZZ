import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detail320dPageRoutingModule } from './detail320d-routing.module';

import { Detail320dPage } from './detail320d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detail320dPageRoutingModule
  ],
  declarations: [Detail320dPage]
})
export class Detail320dPageModule {}
