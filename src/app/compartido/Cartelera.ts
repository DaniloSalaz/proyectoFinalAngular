import { Sesion } from './Sesion';
import { Cine } from './Cine';

export class Cartelera {
    id: number;
    sesiones: Sesion;
    fechaInicio: string;
    fechaFin: string;
    cine: Cine;
    estado: boolean;
}