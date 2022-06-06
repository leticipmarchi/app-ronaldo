import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosVideoPageRoutingModule } from './dados-video-routing.module';

import { DadosVideoPage } from './dados-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosVideoPageRoutingModule
  ],
  declarations: [DadosVideoPage]
})
export class DadosVideoPageModule {}
