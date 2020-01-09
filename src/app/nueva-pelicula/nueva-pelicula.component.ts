import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PeliculaService } from '../services/pelicula.service';
import { Pelicula } from '../compartido/Pelicula';

@Component({
  selector: 'app-nueva-pelicula',
  templateUrl: './nueva-pelicula.component.html',
  styleUrls: ['./nueva-pelicula.component.scss']
})
export class NuevaPeliculaComponent implements OnInit {

  peliculaForm: FormGroup;
  nuevaPelicula: Pelicula;
  pelicula: Pelicula;
  constructor( private servicePelicula: PeliculaService, private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.peliculaForm = this.fb.group({
      titulo: [],
      sinopsis: [],
      clasificacion: [],
      estado: [],
      imgPath: []
    });
  }
  onSubmit() {
    this.nuevaPelicula = this.peliculaForm.value;
    this.nuevaPelicula.actores = [''];
    this.nuevaPelicula.critica = [''];
    this.nuevaPelicula.imgPath = '';
    console.log(this.nuevaPelicula);
    this.servicePelicula.crearPelicula(this.nuevaPelicula).subscribe(p => console.log(p));
    this.peliculaForm.reset();
  }
}
