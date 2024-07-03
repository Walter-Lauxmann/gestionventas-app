import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivosService {
  url = 'http://localhost/api/modelos1/subirarchivos.php';

  constructor(private http: HttpClient) { }

  subirArchivos(datos: any):Observable<any> {
    return this.http.post(this.url, datos);
  }
}
