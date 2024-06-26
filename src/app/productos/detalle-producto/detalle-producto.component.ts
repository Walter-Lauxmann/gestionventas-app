import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent implements OnInit {
  id: any;
  items: any;
  producto: any;

  constructor(
    private ruta: ActivatedRoute,
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id');
    this.obtenerProducto(this.id);

  }

  obtenerProducto(id: any): void {
    this.productosService.getProducto(id)
    .subscribe(
      (res: any) => {
        this.items = res;
        this.producto = this.items[0];
        console.log(this.producto);
      },
      (error) => { console.error (error); }
    );
  }

}
