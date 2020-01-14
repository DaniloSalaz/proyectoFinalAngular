export interface Provincia {
  id: Number;
  nombre: string;
}

export interface Sesion {
  id: Number;
  pelicula: Pelicula;
  fecha: Date;
  hora: TimeRanges;
  reserva: Reserva;
  estreno: boolean;
  costo: Number;
}

export interface Cartelera {
  id: Number;
  sesiones: Sesion[];
  cine: Cine;
  fechaFin: Date;
  fechaInicio: Date;
  estado: boolean;
}

export interface Cine {
  id: Number;
  provincia: String;
  //  provincia: Provincia;
  //   direccion: String;
  //   numTelefono: Number;
  //   carteleras: Cartelera[];
}

export interface Pelicula {
  id: Number;
  titulo: String;
  actores: String[];
  sinopsis: String;
  calificacion: Number;
  clasificacion: String;
  critica: String[];
  estado: boolean;
  imgPath: String;
}

export interface Reserva {
  id: Number;
  sala: Sala;
  fecha: Date;
  hora: TimeRanges;
}

export interface Sala {
  id: number;
  numero: number;
  butacas: Butaca[];
}

export interface Butaca {
  id: number;
  fila: number;
  numero: number;
  disponible: boolean;
}
