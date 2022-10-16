import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoNaturalezaPage } from './listado-naturaleza.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoNaturalezaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoNaturalezaPageRoutingModule {}
