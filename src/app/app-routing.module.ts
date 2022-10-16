import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'naturaleza',
    loadChildren: () => import('./paginas/objetos/naturaleza/listado-naturaleza/listado-naturaleza.module').then( m => m.ListadoNaturalezaPageModule)
  },
  {
    path: 'naturaleza/:nombre',
    loadChildren: () => import('./paginas/objetos/naturaleza/detalles-naturaleza/detalles-naturaleza.module').then( m => m.DetallesNaturalezaPageModule)
  },
  {
    path: 'animales',
    loadChildren: () => import('./paginas/objetos/animales/listado-animales/listado-animales.module').then( m => m.ListadoAnimalesPageModule)
  },
  {
    path: 'animales/:nombre',
    loadChildren: () => import('./paginas/objetos/animales/detalles-animal/detalles-animal.module').then( m => m.DetallesAnimalPageModule)
  },
  {
    path: 'monstruos',
    loadChildren: () => import('./paginas/objetos/monstruos/listado-monstruos/listado-monstruos.module').then( m => m.ListadoMonstruosPageModule)
  },
  {
    path: 'monstruos/:nombre',
    loadChildren: () => import('./paginas/objetos/monstruos/detalles-monstruo/detalles-monstruo.module').then( m => m.DetallesMonstruoPageModule)
  },
  {
    path: 'minerales',
    loadChildren: () => import('./paginas/objetos/minerales/listado-minerales/listado-minerales.module').then( m => m.ListadoMineralesPageModule)
  },
  {
    path: 'minerales/:nombre',
    loadChildren: () => import('./paginas/objetos/minerales/detalles-mineral/detalles-mineral.module').then( m => m.DetallesMineralPageModule)
  },
  {
    path: 'materiales',
    loadChildren: () => import('./paginas/objetos/materiales/listado-materiales/listado-materiales.module').then( m => m.ListadoMaterialesPageModule)
  },
  {
    path: 'materiales/:nombre',
    loadChildren: () => import('./paginas/objetos/materiales/detalles-material/detalles-material.module').then( m => m.DetallesMaterialPageModule)
  },
  {
    path: 'herramientas',
    loadChildren: () => import('./paginas/objetos/herramientas/listado-herramientas/listado-herramientas.module').then( m => m.ListadoHerramientasPageModule)
  },
  {
    path: 'herramientas/:nombre',
    loadChildren: () => import('./paginas/objetos/herramientas/detalles-herramienta/detalles-herramienta.module').then( m => m.DetallesHerramientaPageModule)
  },
  {
    path: 'alimentos',
    loadChildren: () => import('./paginas/objetos/alimentos/listado-alimentos/listado-alimentos.module').then( m => m.ListadoAlimentosPageModule)
  },
  {
    path: 'alimentos/:nombre',
    loadChildren: () => import('./paginas/objetos/alimentos/detalles-alimento/detalles-alimento.module').then( m => m.DetallesAlimentoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
