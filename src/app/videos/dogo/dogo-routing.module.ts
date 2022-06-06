import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogoPage } from './dogo.page';

const routes: Routes = [
  {
    path: '',
    component: DogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogoPageRoutingModule {}
