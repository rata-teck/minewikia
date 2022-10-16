import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoHerramientasPageRoutingModule } from './listado-herramientas-routing.module';

import { ListadoHerramientasPage } from './listado-herramientas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoHerramientasPageRoutingModule
  ],
  declarations: [ListadoHerramientasPage]
})
export class ListadoHerramientasPageModule {}
