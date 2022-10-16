import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesMaterialPageRoutingModule } from './detalles-material-routing.module';

import { DetallesMaterialPage } from './detalles-material.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesMaterialPageRoutingModule
  ],
  declarations: [DetallesMaterialPage]
})
export class DetallesMaterialPageModule {}
