import { Ingrediente } from "./ingrediente";
import { Cualidad } from "./cualidad";
export interface Alimento {
  nombre : string,
  ingredientes : Array<Ingrediente>,
  materiales : Array<any>,
  beneficios : Array<Cualidad>
  imagen : string
}
