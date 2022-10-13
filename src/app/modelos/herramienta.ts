import { Material } from "./material";
import { Mineral } from "./mineral";
import { ObjetoNatural } from "./objeto-natural";
import { ObjetoArtificial } from "./objeto-artificial";
import { Cualidad } from "./cualidad";
type Origen = {
    materiales? : Array<Material>,
    minerales? :Array<Mineral>
    objetos_naturales? : Array<ObjetoNatural>,
    objetos_artificiales? : Array<ObjetoArtificial>
}
export interface Herramienta {
    nombre : string,
    imagen : string,
    origen : Origen,
    cualidades : Array<Cualidad>
}
