import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogoPageRoutingModule } from './dogo-routing.module';

import { DogoPage } from './dogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogoPageRoutingModule
  ],
  declarations: [DogoPage]
})
export class DogoPageModule {}
