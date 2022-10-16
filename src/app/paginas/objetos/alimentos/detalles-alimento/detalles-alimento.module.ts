import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesAlimentoPageRoutingModule } from './detalles-alimento-routing.module';

import { DetallesAlimentoPage } from './detalles-alimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesAlimentoPageRoutingModule
  ],
  declarations: [DetallesAlimentoPage]
})
export class DetallesAlimentoPageModule {}
