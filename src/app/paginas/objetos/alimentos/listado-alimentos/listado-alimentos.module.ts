import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoAlimentosPageRoutingModule } from './listado-alimentos-routing.module';

import { ListadoAlimentosPage } from './listado-alimentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoAlimentosPageRoutingModule
  ],
  declarations: [ListadoAlimentosPage]
})
export class ListadoAlimentosPageModule {}
