import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoMonstruosPageRoutingModule } from './listado-monstruos-routing.module';

import { ListadoMonstruosPage } from './listado-monstruos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoMonstruosPageRoutingModule
  ],
  declarations: [ListadoMonstruosPage]
})
export class ListadoMonstruosPageModule {}
