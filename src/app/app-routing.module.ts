import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

//la estructura la genenero angular, ahora aca pondremos nuestra rutas
//http:localhost:4200/productos
const routes: Routes = [
  {path: 'productos', component: ProductoListaComponent},
  {path: '', redirectTo: 'productos', pathMatch:'full'},//pathmatch full quiere decir que la coincidencia de la ruta debe ser completa
  {path: 'agregar-producto', component: AgregarProductoComponent},//ruta para agregar producto
  {path: 'editar-producto/:id', component: EditarProductoComponent}//ruta para ir a editar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
