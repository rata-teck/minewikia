import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesMineralPageRoutingModule } from './detalles-mineral-routing.module';

import { DetallesMineralPage } from './detalles-mineral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesMineralPageRoutingModule
  ],
  declarations: [DetallesMineralPage]
})
export class DetallesMineralPageModule {}
