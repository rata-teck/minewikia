import { Ingrediente } from "./ingrediente";
import { Cualidad } from "./cualidad";
import { Herramienta } from "./herramienta";
import { ObjetoArtificial } from "./objeto-artificial";
type Elementos = {
  herramientas? : Array<Herramienta>,
  objetos_artificiales? : Array<ObjetoArtificial>
}
export interface Alimento {
  nombre : string,
  ingredientes : Array<Ingrediente>,
  elementos_necesarios : Elementos,
  cualidades : Array<Cualidad>,
  imagen : string
}
