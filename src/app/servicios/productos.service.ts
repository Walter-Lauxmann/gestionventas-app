import { Injectable } from '@angular/core';
import { Productos } from './productos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  items = [];
  producto: Productos = {
    id: 0,
    codigo: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    imagen: ''
  }

  url= 'http://localhost/api/modelos1/datos.php?tabla=productos';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${this.url}&accion=seleccionar`);
  }

  getProducto(id: any): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${this.url}&accion=seleccionar&id=${id}`);
  }

}
