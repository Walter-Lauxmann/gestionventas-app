import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { UsuariosService } from '../servicios/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from '../clases/usuario';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private usuarioService: UsuariosService,
    private router: Router
  ) {}


  ngOnInit(): void {

  }

  login(usuario: string, password: string, event: Event) {
    event.preventDefault(); // Prevenimos el evento por defecto
    this.loginService.login(usuario, password)
      .subscribe(
        res => {
          let u: Usuario = {usuario: usuario, nivel: 0};
          this.usuarioService.setUsuarioLogueado(u);
          this.usuarioService.estaLogueado = true;
        },
        error => {
          console.error(error);
        },
        () => this.navegar()
      );
  }

  navegar() {
    this.router.navigateByUrl('/');
  }

}
