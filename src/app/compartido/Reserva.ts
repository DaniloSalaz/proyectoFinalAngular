import { Sala } from './Sala';
import { Hora } from './Hora';

export class Reserva {
    id: number;
    sala: Sala;
    fecha: string;
    hora: Hora;
}