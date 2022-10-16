import {ObjetoNatural} from './objeto-natural';
import {ObjetoArtificial} from './objeto-artificial';
import {Animal} from './animal';
import {Mounstro} from './mounstro';
import {Mineral} from './mineral';
import {Material} from './material';
import {Herramienta} from './herramienta';
import {Alimento} from './alimento';
export interface Data {
  objetos_naturales : Array<ObjetoNatural>,
  objetos_artificiales : Array<ObjetoArtificial>,
  animales : Array<Animal>,
  monstruos : Array<Mounstro>,
  minerales : Array<Mineral>,

}
