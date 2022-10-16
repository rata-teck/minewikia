import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoMineralesPageRoutingModule } from './listado-minerales-routing.module';

import { ListadoMineralesPage } from './listado-minerales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoMineralesPageRoutingModule
  ],
  declarations: [ListadoMineralesPage]
})
export class ListadoMineralesPageModule {}
