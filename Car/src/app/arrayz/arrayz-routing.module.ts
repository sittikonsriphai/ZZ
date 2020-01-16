import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrayzPage } from './arrayz.page';

const routes: Routes = [
  {
    path: '',
    component: ArrayzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrayzPageRoutingModule {}
