import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoNaturalezaPageRoutingModule } from './listado-naturaleza-routing.module';

import { ListadoNaturalezaPage } from './listado-naturaleza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoNaturalezaPageRoutingModule
  ],
  declarations: [ListadoNaturalezaPage]
})
export class ListadoNaturalezaPageModule {}
