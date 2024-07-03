import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent implements OnInit {
  id: any;
  items: any;
  producto: any;

  constructor(
    private ruta: ActivatedRoute,
    private router: Router,
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id');
    if(this.id > 0) {
      this.obtenerProducto(this.id);
    } else {
      this.producto = this.productosService.producto;
    }

  }

  obtenerProducto(id: any): void {
    this.productosService.getProducto(id)
    .subscribe(
      (res: any) => {
        this.items = res;
        this.producto = this.items[0];
        console.log(this.items);
        console.log(this.producto);
      },
      (error) => { console.error (error); }
    );
  }

  guardarProducto(id: any): void {
    this.productosService.guardarProducto(id, this.producto);
    alert('Producto guardado!');
    this.router.navigate(['/']); // this.router.navigateByUrl('/');
  }

  eliminarProducto(id: any): void {
    let respuesta = confirm(`¿Desea eliminar a ${this.producto.nombre}?`);
    if(respuesta) {
      this.productosService.eliminarProducto(id);
      alert('Producto eliminado!');
      this.router.navigate(['/']);
    }
  }

}
