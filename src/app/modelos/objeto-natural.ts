import { Cualidad } from "./cualidad";
export interface ObjetoNatural {
    nombre : string,
    imagen : string,
    origen : string,
    cualidades : Array<Cualidad>
}
