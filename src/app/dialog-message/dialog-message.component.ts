import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  img: string;
  message: string;
}
@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.scss']
})
export class DialogMessageComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogMessageComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
