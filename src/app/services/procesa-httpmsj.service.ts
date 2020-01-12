import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcesaHttpmsjService {

  constructor() { }
  public gestionError(error: Response | any) {
    let errorMsj: string; //se crea un mensaje de error
    if (error.error instanceof ErrorEvent) {
      errorMsj = error.error.message;
    } else {
      errorMsj = `${error.status} - ${error.statusText || ''} ${error.error}`;
    }
    console.error(errorMsj);
    return throwError(errorMsj); //devuelve el error en un observable
  }
}
