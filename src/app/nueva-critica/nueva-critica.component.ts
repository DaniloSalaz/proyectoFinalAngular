import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Pelicula } from '../compartido/Pelicula';
import { PeliculaService } from '../services/pelicula.service';
import { DialogMessageComponent } from '../dialog-message/dialog-message.component';

export interface CriticaData {
  pelicula: Pelicula;
  comentario: string;
}
@Component({
  selector: 'app-nueva-critica',
  templateUrl: './nueva-critica.component.html',
  styleUrls: ['./nueva-critica.component.scss']
})
export class NuevaCriticaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NuevaCriticaComponent>, @Inject(MAT_DIALOG_DATA) public data: CriticaData, 
              private servicePelicula: PeliculaService, public dialog: MatDialog) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  guardarCritica() {
    this.data.pelicula.critica.push(this.data.comentario);
    this.servicePelicula.editarPelicula(this.data.pelicula).subscribe(res =>{
      this.dialogRef.close();
      this.dialog.open(DialogMessageComponent, {
        width: '250px',
        data: { img: 'check.png', message: 'Crítica guardada' }
      });
    },err => {
      this.dialog.open(DialogMessageComponent, {
        width: '250px',
        data: { img: 'error.png', message: 'Error al guardar la crítica' }
      });
    });
  }

}
