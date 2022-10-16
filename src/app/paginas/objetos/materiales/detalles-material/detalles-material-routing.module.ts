import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesMaterialPage } from './detalles-material.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesMaterialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesMaterialPageRoutingModule {}
