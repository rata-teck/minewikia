import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoAnimalesPageRoutingModule } from './listado-animales-routing.module';

import { ListadoAnimalesPage } from './listado-animales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoAnimalesPageRoutingModule
  ],
  declarations: [ListadoAnimalesPage]
})
export class ListadoAnimalesPageModule {}
