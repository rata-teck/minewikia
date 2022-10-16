import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesMineralPage } from './detalles-mineral.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesMineralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesMineralPageRoutingModule {}
