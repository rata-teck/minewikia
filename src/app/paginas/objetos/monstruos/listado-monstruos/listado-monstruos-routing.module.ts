import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoMonstruosPage } from './listado-monstruos.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoMonstruosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoMonstruosPageRoutingModule {}
