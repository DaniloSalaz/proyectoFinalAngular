import { Component, OnInit, Inject } from "@angular/core";
import { Cine } from "../interfaces";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
export interface DialogData {
  img: string;
  message: string;
}

@Component({
  selector: "app-dialog-cine",
  templateUrl: "./dialog-cine.component.html",
  styleUrls: ["./dialog-cine.component.scss"]
})
export class DialogCineComponent implements OnInit {
  cines: Cine[];
  selected = "";

  constructor(
    public dialogRef: MatDialogRef<DialogCineComponent>,

    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.cines = [
      { id: 0, provincia: "Meridiano" },
      { id: 1, provincia: "Alcampo" },
      { id: 2, provincia: "La villa" }
    ];
  }

  ngOnInit() {
    console.log(this.cines);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onChangeSelect(selected): void {
    console.log(selected);
    this.dialogRef.close();
  }
}
