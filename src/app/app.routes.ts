import { Routes, CanActivate } from '@angular/router';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './productos/detalle-producto/detalle-producto.component';
import { LoginComponent } from './login/login.component';
import { usuarioActivoGuard } from './guards/usuario-activo.guard';

export const routes: Routes = [
    { path: '', component: ListaProductosComponent },
    { path: 'detalle-producto/:id', component: DetalleProductoComponent, canActivate: [usuarioActivoGuard] },
    { path: 'login', component: LoginComponent } 
];
