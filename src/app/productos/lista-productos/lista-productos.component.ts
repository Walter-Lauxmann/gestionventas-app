import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ProductosService } from '../../servicios/productos.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit {
  productos: any;

  constructor(private productoService: ProductosService) {}

  ngOnInit(): void {
    this.productoService.getProductos()
      .subscribe(
        (res: any) => { this.productos = res; },
        (error) => { console.error(error); }
      );
  }
}
