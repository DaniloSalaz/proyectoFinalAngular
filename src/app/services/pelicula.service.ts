import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/BaseURL';
import { baseURL2 } from '../compartido/BaseURL';
import { Pelicula } from '../compartido/Pelicula';
import { HttpHeaders } from '@angular/common/http';
import { ProcesaHttpmsjService } from './procesa-httpmsj.service';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private http: HttpClient, private procesaHttpmsjService: ProcesaHttpmsjService) { }

  crearPelicula(pelicula): Observable<any> {
    return this.http.post<Pelicula>(baseURL + 'peliculas/', pelicula, httpOptions)
    .pipe(catchError(this.procesaHttpmsjService.gestionError));
  }
  getPelicualas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(baseURL + 'peliculas')
    .pipe(catchError(this.procesaHttpmsjService.gestionError));
  }

  getPelicula(id): Observable<Pelicula> {
    return this.http.get<Pelicula>(baseURL + 'peliculas/' + id)
    .pipe(catchError(this.procesaHttpmsjService.gestionError));
  }

  editarPelicula(pelicula: Pelicula): Observable<any> {
    return this.http.put<Pelicula>(baseURL + 'peliculas/' + pelicula.id, pelicula, httpOptions)
    .pipe(catchError(this.procesaHttpmsjService.gestionError));
  }

}
