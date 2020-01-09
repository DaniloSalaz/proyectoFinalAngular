import { Sesion } from './Sesion';
import { Butaca } from './Butaca';

export class Entrada{
    id: number;
    sesion: Sesion;
    butacas: Butaca[];
    fecha: string;
}