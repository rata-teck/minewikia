import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, RouterLink} from '@angular/router';

//Servicios
import {RegistrarObjetoService} from './servicios/registrar-objeto/registrar-objeto.service';
import {ObtenerObjetoService} from './servicios/obtener-objeto/obtener-objeto.service';
import {EliminarObjetoService} from './servicios/eliminar-objeto/eliminar-objeto.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    RouterLink
  ],
  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    RegistrarObjetoService,
    ObtenerObjetoService,
    EliminarObjetoService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
