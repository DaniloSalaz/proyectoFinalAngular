import { Roles } from './Roles';

export class Usuario {
    id: number;
    nombre: string;
    apellido: string;
    direccion: string;
    numeroTelefono: number;
    correo: string;
    roles: Roles[];
    username: string;
    password: string;
}