import { Herramienta } from "./herramienta";
import { Cualidad } from "./cualidad";
export interface Mounstro {
    nombre : string,
    imagen : string,
    cualidades : Array<Cualidad>,
    herramienta? : Herramienta
}
