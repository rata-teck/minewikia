import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoHerramientasPage } from './listado-herramientas.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoHerramientasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoHerramientasPageRoutingModule {}
