import { Component, OnInit, Inject } from "@angular/core";
import { DialogCineComponent } from "../dialog-cine/dialog-cine.component";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
export interface DialogData {
  img: string;
  message: string;
}

export interface Provincia {
  id: Number;
  nombre: string;
}

@Component({
  selector: "app-dialog-message",
  templateUrl: "./dialog-message.component.html",
  styleUrls: ["./dialog-message.component.scss"]
})
export class DialogMessageComponent implements OnInit {
  provincias: Provincia[];
  selected = "";

  constructor(
    public dialogRef: MatDialogRef<DialogMessageComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.provincias = [
      { id: 0, nombre: "Madrid" },
      { id: 1, nombre: "Valencia" },
      { id: 2, nombre: "Santa Cruz de Tenerife" }
    ];
  }

  ngOnInit() {
    console.log(this.provincias);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onChangeSelect(selected): void {
    console.log(selected);
    const dialogRef = this.dialog.open(DialogCineComponent, {
      width: "400px"
    });
    // Aqui enviar la peticion y pedir los cines de esa provincia
  }
}
