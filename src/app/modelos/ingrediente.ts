import { Animal } from "./animal";
import { ObjetoNatural } from "./objeto-natural";
import { Herramienta}  from './herramienta';
import {ObjetoArtificial} from './objeto-artificial';
import {Liquido} from './liquido';
type Origen = {
  animal? : Animal,
  objetos_naturales? : Array<ObjetoNatural>,
  liquidos? : Array<Liquido>
}
type Elementos = {
  herramientas? : Array<Herramienta>,
  objetos_artificiales? : Array<ObjetoArtificial>
}
export interface Ingrediente {
  nombre : string,
  imagen : string,
  origen : Origen,
  elementos_necesarios : Elementos
}
