import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { NavegacionComponent } from './navegacion/navegacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavegacionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestionventas-app';
}
