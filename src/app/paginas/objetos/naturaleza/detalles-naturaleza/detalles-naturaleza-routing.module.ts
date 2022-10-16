import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesNaturalezaPage } from './detalles-naturaleza.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesNaturalezaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesNaturalezaPageRoutingModule {}
