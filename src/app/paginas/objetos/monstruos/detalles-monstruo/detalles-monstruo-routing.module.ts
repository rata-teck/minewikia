import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesMonstruoPage } from './detalles-monstruo.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesMonstruoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesMonstruoPageRoutingModule {}
