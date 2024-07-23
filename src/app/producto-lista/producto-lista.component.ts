import { Observable } from 'rxjs';
import { Producto } from './../producto';
import { Component } from '@angular/core';
import { ProductoServiceService } from '../services/producto-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-producto-lista',
  templateUrl: '././producto-lista.component.html',
  styleUrls: ['././producto-lista.component.css']
})
export class ProductoListaComponent {
  //la lista donde estaran los productos
  productos: Producto[] | undefined;
  //nombre :tipodeDato
  constructor(private productoServicio: ProductoServiceService, private enrutador: Router, private snackBar: MatSnackBar){}
  //ProductoServiceService con este service podremos,
  //ahi en parametros es como que se inyectan las dependencias
  
  
  
  //metodo que se inicializa al principio
  ngOnInit(){
    //cargar todos los productos
    this.obtenerProductos();
  }
  
  
  //metodo
  private obtenerProductos(){
    //consumimos los datoso del observable (nos subscribimos)
    this.productoServicio.obtenerProductosLista().subscribe(
      //asignamos los datos a nuestro objeto productos[]
      (datos =>{
        this.productos = datos;
      })
    );
  }
  
  
  editarProducto(id: number) {
    //redirigimos a tal pagina y le enviamos el id tambien
    this.enrutador.navigate(['editar-producto',id]);
  
  }

  //eliminar un producto
  eliminarProducto(id: number) {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este elemento?');

    if (confirmacion) {
      
      this.productoServicio.eliminarProducto(id).subscribe({//envia un metodo de tipo observable por eso tenemos q subscribirnos
        next: (datos)=>{
          this.obtenerProductos();//mandamos a obtener productos para que 'recargue'
           // Si la eliminación es exitosa, mostrar el mensaje
           this.snackBar.open('Elemento eliminado con éxito', 'Cerrar', {
            duration: 3000,
            panelClass: ['snackbar-success']
          });
        },
        error: (error:any)=>{
          console.log(error);
           // Manejar el error si es necesario
           this.snackBar.open('Ocurrió un error al eliminar el elemento', 'Cerrar', {
            duration: 3000,
            panelClass: ['snackbar-error']
          });
        }
      });
    }
  }
  
}

