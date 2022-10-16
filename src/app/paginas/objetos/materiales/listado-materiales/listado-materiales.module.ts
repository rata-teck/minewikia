import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoMaterialesPageRoutingModule } from './listado-materiales-routing.module';

import { ListadoMaterialesPage } from './listado-materiales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoMaterialesPageRoutingModule
  ],
  declarations: [ListadoMaterialesPage]
})
export class ListadoMaterialesPageModule {}
