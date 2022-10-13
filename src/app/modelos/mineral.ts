import { ObjetoNatural } from "./objeto-natural";
import { Cualidad } from "./cualidad";
export interface Mineral {
    nombre : string,
    imagen : string,
    cualidades : Array<Cualidad>,
    origen : ObjetoNatural
}
