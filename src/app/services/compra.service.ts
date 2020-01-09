import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/BaseURL';
import { baseURL2 } from '../compartido/BaseURL';
import { Compra } from '../compartido/Compra';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }

  crearCompra(compra): Observable<any> {
    return this.http.post<Compra>(baseURL + 'compras/', compra, httpOptions);
  }
  getCompras(): Observable<Compra[]> {
    return this.http.get<Compra[]>(baseURL + 'compras');
  }

  getcompra(id): Observable<Compra> {
    return this.http.get<Compra>(baseURL + 'compras/' + id);
  }

  editarcompra(compra: Compra): Observable<any> {
    return this.http.put<Compra>(baseURL + 'compras/' + compra.id, compra, httpOptions);
  }

}
