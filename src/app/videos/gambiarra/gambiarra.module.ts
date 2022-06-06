import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GambiarraPageRoutingModule } from './gambiarra-routing.module';

import { GambiarraPage } from './gambiarra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GambiarraPageRoutingModule
  ],
  declarations: [GambiarraPage]
})
export class GambiarraPageModule {}
