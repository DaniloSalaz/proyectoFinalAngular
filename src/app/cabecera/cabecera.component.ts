import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DialogMessageComponent } from "../dialog-message/dialog-message.component";

@Component({
  selector: "app-cabecera",
  templateUrl: "./cabecera.component.html",
  styleUrls: ["./cabecera.component.scss"]
})
export class CabeceraComponent implements OnInit {
  name: String;
  animal: String;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogMessageComponent, {
      width: "400px",
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
}
