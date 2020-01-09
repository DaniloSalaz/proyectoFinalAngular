import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/BaseURL';
import { baseURL2 } from '../compartido/BaseURL';
import { Butaca } from '../compartido/Butaca';
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
export class ButacaService {

  constructor(private http: HttpClient) { }

  crearButaca(butaca): Observable<any> {
    return this.http.post<Butaca>(baseURL + 'butacas/', butaca, httpOptions);
  }
  getButacas(): Observable<Butaca[]> {
    return this.http.get<Butaca[]>(baseURL + 'butacas');
  }

  getButaca(id): Observable<Butaca> {
    return this.http.get<Butaca>(baseURL + 'butacas/' + id);
  }

  editarButaca(butaca: Butaca): Observable<any> {
    return this.http.put<Butaca>(baseURL + 'butacas/' + butaca.id, butaca, httpOptions);
  }
}
