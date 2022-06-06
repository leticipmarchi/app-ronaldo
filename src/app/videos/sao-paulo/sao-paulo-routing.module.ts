import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaoPauloPage } from './sao-paulo.page';

const routes: Routes = [
  {
    path: '',
    component: SaoPauloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaoPauloPageRoutingModule {}
