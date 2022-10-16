import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoAlimentosPage } from './listado-alimentos.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoAlimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoAlimentosPageRoutingModule {}
