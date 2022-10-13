import { Cualidad } from "./cualidad";
import {Alimento} from './alimento';
export interface Animal {
    nombre : string,
    imagen : string,
    cualidades : Array<Cualidad>,
    alimento : Alimento
}
