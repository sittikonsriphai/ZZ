import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detailx1Page } from './detailx1.page';

const routes: Routes = [
  {
    path: '',
    component: Detailx1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detailx1PageRoutingModule {}
