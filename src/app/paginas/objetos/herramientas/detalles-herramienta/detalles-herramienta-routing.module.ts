import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesHerramientaPage } from './detalles-herramienta.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesHerramientaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesHerramientaPageRoutingModule {}
