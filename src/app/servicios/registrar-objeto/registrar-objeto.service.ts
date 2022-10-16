import { Injectable } from '@angular/core';
import {Alimento} from './../../modelos/alimento';
import {Animal} from './../../modelos/animal';
import {Cualidad} from './../../modelos/cualidad';
import {Herramienta} from './../../modelos/herramienta';
import {Ingrediente} from './../../modelos/ingrediente';
import {Liquido} from './../../modelos/liquido';
import {Material} from './../../modelos/material';
import {Mineral} from './../../modelos/mineral';
import {Mounstro} from './../../modelos/mounstro';
import {ObjetoArtificial} from './../../modelos/objeto-artificial';
import {ObjetoNatural} from './../../modelos/objeto-natural';
import {Data} from './../../modelos/data';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarObjetoService {
  private url : string = 'localhost:3000';
  public data? : Data;
  constructor(
    public cliente : HttpClient
  ) { }
  public registrar(tipo : string, objeto : any) : void{
    this.cliente.get<Data>(this.url).subscribe(peticion => {
      this.data = peticion;
    });
    if(tipo == 'alimento'){
      this.data.alimentos.push(objeto);
    }
    else{
      if(tipo == 'animal'){
        this.data.animales.push(objeto);
      }
      else{
        if(tipo == 'herramienta'){
          this.data.herramientas.push(objeto);
        }
        else{
          if(tipo == 'naturaleza'){
            this.data.objetos_naturales.push(objeto);
          }
          else{
            if(tipo == 'material'){
              this.data.materiales.push(objeto);
            }
            else{
              if(tipo == 'mineral'){
                
              }
            }
          }
        }
      }
    }
  }
}
