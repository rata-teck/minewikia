import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesAlimentoPage } from './detalles-alimento.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesAlimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesAlimentoPageRoutingModule {}
