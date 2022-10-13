import { Mineral } from './mineral';
import {Herramienta} from './herramienta';
import {Cualidad} from './cualidad';
import { ObjetoNatural } from './objeto-natural';
import { ObjetoArtificial } from './objeto-artificial';
type Componentes = {
  minerales? : Array<Mineral>,
  objetos_naturales? : Array<ObjetoNatural>,
  objetos_artificiales? : Array<ObjetoArtificial>,
}
export interface Material {
  nombre : string,
  imagen : string,
  cualidades : Array<Cualidad>,
  componentes : Componentes,
  herramientas : Array<Herramienta>
}
