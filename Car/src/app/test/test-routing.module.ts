import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TESTPage } from './test.page';

const routes: Routes = [
  {
    path: '',
    component: TESTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TESTPageRoutingModule {}
