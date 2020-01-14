import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DialogMessageComponent } from "../dialog-message/dialog-message.component";

@Component({
  selector: "app-cartelera",
  templateUrl: "./cartelera.component.html",
  styleUrls: ["./cartelera.component.scss"]
})
export class CarteleraComponent implements OnInit {
  name: String;
  animal: String;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogMessageComponent, {
      width: "250px",
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  ngOnInit() {
    const dialogRef = this.dialog.open(DialogMessageComponent, {
      width: "250px",
      data: { name: this.name, animal: this.animal }
    });
  }
}
