import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detail320dPage } from './detail320d.page';

const routes: Routes = [
  {
    path: '',
    component: Detail320dPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detail320dPageRoutingModule {}
