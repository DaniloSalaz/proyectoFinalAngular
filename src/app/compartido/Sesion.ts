import { Pelicula } from './Pelicula';
import { Hora } from './Hora';
import { Reserva } from './Reserva';

export class Sesion {
    id: number;
    pelicula: Pelicula;
    fecha: string;
    hora: Hora;
    reserva: Reserva;
    estreno: boolean;
    costo: number;
}