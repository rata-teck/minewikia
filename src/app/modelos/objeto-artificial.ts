import {Material} from './material';
import {Mineral} from './mineral';
import {Herramienta} from './herramienta';
import { ObjetoNatural } from './objeto-natural';
import {Cualidad} from './cualidad';
type Origen = {
    objetos_naturales? : Array<ObjetoNatural>,
    materiales? : Array<Material>,
    minerales? : Array<Mineral>
}
export interface ObjetoArtificial {
    nombre : string,
    imagen : string,
    origen : Origen,
    herramientas? : Array<Herramienta>,
    cualidades : Array<Cualidad>
}
