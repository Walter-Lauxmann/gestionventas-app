import { Routes } from '@angular/router';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './productos/detalle-producto/detalle-producto.component';

export const routes: Routes = [
    { path: '', component: ListaProductosComponent },
    { path: 'detalle-producto/:id', component: DetalleProductoComponent }
];
