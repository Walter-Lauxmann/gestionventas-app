import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private logueado: boolean = false;
  private usuarioLogueado: Usuario = {usuario: ''};

  constructor() { }

  estaLogueado(): boolean {
    return this.logueado;
  }

  setUsuarioLogueado(usuario: Usuario) {
    this.logueado = true;
    this.usuarioLogueado = usuario;
    sessionStorage.setItem('usuarioActual', JSON.stringify(usuario));
  }

  getUsuarioLogueado() {
    return sessionStorage.getItem('usuarioActual');
  }

  logout() {
    this.logueado = false;
    sessionStorage.removeItem('usuarioActual');
  }
}
