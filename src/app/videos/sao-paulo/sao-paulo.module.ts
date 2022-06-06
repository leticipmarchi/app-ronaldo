import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaoPauloPageRoutingModule } from './sao-paulo-routing.module';

import { SaoPauloPage } from './sao-paulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaoPauloPageRoutingModule
  ],
  declarations: [SaoPauloPage]
})
export class SaoPauloPageModule {}
