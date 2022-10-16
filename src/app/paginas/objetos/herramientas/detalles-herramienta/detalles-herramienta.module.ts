import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesHerramientaPageRoutingModule } from './detalles-herramienta-routing.module';

import { DetallesHerramientaPage } from './detalles-herramienta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesHerramientaPageRoutingModule
  ],
  declarations: [DetallesHerramientaPage]
})
export class DetallesHerramientaPageModule {}
