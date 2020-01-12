import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface PeriodicElement {
  tipo: string;
  precio: number;
  cantidad: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {tipo: '2D Adulto', precio: 6.00, cantidad: 0},
  {tipo: '2D Tercera edad', precio: 3.00, cantidad: 0},
  {tipo: '2D Niños', precio: 6.00, cantidad: 0},
];
@Component({
  selector: 'app-procesar-compra',
  templateUrl: './procesar-compra.component.html',
  styleUrls: ['./procesar-compra.component.scss']
})

export class ProcesarCompraComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['tipo', 'precio', 'cantidad', ];
  totalCompra = 0;
  isLinear="true";
  filas;
  columnas;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
   this.dataSource = ELEMENT_DATA;
   this.filas = Array(8).fill(8);
   this.columnas = Array(10).fill(10);
  }
  oncl(){
    console.log(this.dataSource);
  }
  calTotal(){
    this.totalCompra = 0;
    this.dataSource.map(res => {
      this.totalCompra += (res.cantidad * res.precio); 
    });
  }
  pin(){
    return 'primary';
  }
}
