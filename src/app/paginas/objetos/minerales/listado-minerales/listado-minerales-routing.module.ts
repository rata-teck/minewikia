import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoMineralesPage } from './listado-minerales.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoMineralesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoMineralesPageRoutingModule {}
