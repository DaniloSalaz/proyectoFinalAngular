import { Entrada } from './Entrada';
import { Usuario } from './Usuario';

export class Compra {
    id: number;
    fechaCompra: string;
    total: number;
    metodoPago: string;
    entrada: Entrada;
    usuario: Usuario;
}