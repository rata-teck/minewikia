import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoMaterialesPage } from './listado-materiales.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoMaterialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoMaterialesPageRoutingModule {}
