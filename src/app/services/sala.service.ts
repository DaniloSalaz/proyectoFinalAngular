import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/BaseURL';
import { baseURL2 } from '../compartido/BaseURL';
import { Sala } from '../compartido/Sala';
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
export class SalaService {

  constructor(private http: HttpClient) { }

  crearSalas(sala): Observable<any> {
    return this.http.post<Sala>(baseURL + 'salas/', sala, httpOptions);
  }
  getSalas(): Observable<Sala[]> {
    return this.http.get<Sala[]>(baseURL + 'salas');
  }

  getSala(id): Observable<Sala> {
    return this.http.get<Sala>(baseURL + 'salas/' + id);
  }

  editarSala(sala: Sala): Observable<any> {
    return this.http.put<Sala>(baseURL + 'salas/' + sala.id, sala, httpOptions);
  }
}
