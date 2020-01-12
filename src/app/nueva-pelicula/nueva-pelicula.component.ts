import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PeliculaService } from '../services/pelicula.service';
import { Pelicula } from '../compartido/Pelicula';
import { isObject } from 'util';
import { DialogMessageComponent } from '../dialog-message/dialog-message.component';

@Component({
  selector: 'app-nueva-pelicula',
  templateUrl: './nueva-pelicula.component.html',
  styleUrls: ['./nueva-pelicula.component.scss']
})
export class NuevaPeliculaComponent implements OnInit {

  peliculaForm: FormGroup;
  nuevaPelicula: Pelicula;
  pelicula: Pelicula;
  constructor(private servicePelicula: PeliculaService, private fb: FormBuilder, public dialog: MatDialog, private _snackBar: MatSnackBar) {
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
    this.servicePelicula.crearPelicula(this.nuevaPelicula).subscribe(res => {
      if (res != null) {
        this.dialog.open(DialogMessageComponent, {
          width: '250px',
          data: { img: 'check.png', message: 'Película guardada' }
        });
      }
    }, errr => {
      this.dialog.open(DialogMessageComponent, {
        width: '250px',
        data: { img: 'error.png', message: 'Error al guardar la película' }
      });
    });
    this.peliculaForm.reset();
  }
  openSnackBar(message: string, value: string) {
    this._snackBar.open(message, null, {
      duration: 2000,
      panelClass: ['succsess-snackbar']
    });
  }
}
