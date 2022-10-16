import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesNaturalezaPageRoutingModule } from './detalles-naturaleza-routing.module';

import { DetallesNaturalezaPage } from './detalles-naturaleza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesNaturalezaPageRoutingModule
  ],
  declarations: [DetallesNaturalezaPage]
})
export class DetallesNaturalezaPageModule {}
