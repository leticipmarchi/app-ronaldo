import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GambiarraPage } from './gambiarra.page';

const routes: Routes = [
  {
    path: '',
    component: GambiarraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GambiarraPageRoutingModule {}
