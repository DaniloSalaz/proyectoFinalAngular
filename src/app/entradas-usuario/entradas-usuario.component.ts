import { Component, OnInit } from '@angular/core';
import { efectOver } from '../animations/app.animations';

@Component({
  selector: 'app-entradas-usuario',
  templateUrl: './entradas-usuario.component.html',
  styleUrls: ['./entradas-usuario.component.scss'],
  animations: [efectOver()]
})
export class EntradasUsuarioComponent implements OnInit {
  efecto='afuera';
  efecto2='afuera';
  efecto3='afuera';
  constructor() { }

  ngOnInit() {
  }
  efectoOver() {
    this.efecto = 'sobre';
  }
  efectoOut() {
    this.efecto = 'afuera';
  }
  efectoOver2() {
    this.efecto2 = 'sobre';
  }
  efectoOut2() {
    this.efecto2 = 'afuera';
  }
  efectoOver3() {
    this.efecto3 = 'sobre';
  }
  efectoOut3() {
    this.efecto3 = 'afuera';
  }

}
