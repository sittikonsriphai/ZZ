import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Arrayz2Page } from './arrayz2.page';

const routes: Routes = [
  {
    path: '',
    component: Arrayz2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Arrayz2PageRoutingModule {}
