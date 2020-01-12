import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../services/pelicula.service';
import { Pelicula } from '../compartido/Pelicula';
import { efectOver } from '../animations/app.animations';
import { NuevaCriticaComponent } from '../nueva-critica/nueva-critica.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-sesion-pelicula',
  templateUrl: './sesion-pelicula.component.html',
  styleUrls: ['./sesion-pelicula.component.scss'],
  animations: [efectOver()]
})
export class SesionPeliculaComponent implements OnInit {

  peliculaEfectos: string[];
  efecto = 'sobre';
  vPeliculas: Pelicula[];
  constructor(private servicePelicula: PeliculaService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getPeliculas();
  }

  getPeliculas() {
    this.servicePelicula.getPelicualas().subscribe(res => {
      this.vPeliculas = res;
      this.peliculaEfectos = this.setEfectosPeliculas();
    },
      err => {
        console.log('no se pude cargar las sesiones');
      });
  }
  efectoOver(id) {
    this.peliculaEfectos[id] = 'sobre';
  }
  efectoOut(id) {
    this.peliculaEfectos[id] = 'afuera';
  }
  getEfecto(id) {
   return this.peliculaEfectos[id];
  }
  setEfectosPeliculas(): any {
    const ef = [];
    this.vPeliculas.forEach(p => {
      ef[p.id] = 'afuera';
      console.log(p.id);
    });
    console.log(ef);
    return ef;
  }
  nuevaCritica(pelicula): void {
    const dialogRef = this.dialog.open(NuevaCriticaComponent, {
      width: '250px',
      data: {pelicula, comentario: ''}
    });
  }
}
