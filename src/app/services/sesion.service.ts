import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/BaseURL';
import { baseURL2 } from '../compartido/BaseURL';
import { Sesion } from '../compartido/Sesion';
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
export class SesionService {

  constructor(private http: HttpClient) { }

  crearSesion(sesion): Observable<any> {
    return this.http.post<Sesion>(baseURL + 'sesiones/', sesion, httpOptions);
  }
  getSesiones(): Observable<Sesion[]> {
    return this.http.get<Sesion[]>(baseURL + 'sesiones');
  }

  getSesion(id): Observable<Sesion> {
    return this.http.get<Sesion>(baseURL + 'sesiones/' + id);
  }

  editarSesion(sesion: Sesion): Observable<any> {
    return this.http.put<Sesion>(baseURL + 'sesiones/' + sesion.id, sesion, httpOptions);
  }
}
