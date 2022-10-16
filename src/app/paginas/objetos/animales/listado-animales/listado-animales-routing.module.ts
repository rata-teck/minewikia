import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoAnimalesPage } from './listado-animales.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoAnimalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoAnimalesPageRoutingModule {}
