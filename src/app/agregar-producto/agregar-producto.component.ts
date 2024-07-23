import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoServiceService } from '../services/producto-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {

  //creamos el objeto producto y asi lo podremos utilizar en el html :D
  producto : Producto = new Producto();

  //en los parametros del contructor aca se defines la s propiedades
  constructor(private productoServicio: ProductoServiceService, private enrutador: Router, private snackBar: MatSnackBar){}


  //el metodo q seriea como el action
  onSubmit() {
    this.guardarProducto();
}


  guardarProducto() {
    //nos regresara un objeto de tipo obsevable por eso tenemos que subscribirnos
    this.productoServicio.agregarProducto(this.producto).subscribe({
      //next response si se realizo correctamente
      next:(datos) =>{
        this.irListaProductos();
        // Si la operación es exitosa, mostrar el mensaje
        this.snackBar.open('Operación realizada con éxito', 'Cerrar', {
          duration: 3000
        });
      },
      //response si hubo un error
      error:(error: any)=>{
        console.log(error);
        this.snackBar.open('Ocurrió un error', 'Cerrar', {
          duration: 3000
        });
      }

    });
  }
  //redirigimos
  irListaProductos() {
    this.enrutador.navigate(['/productos']);
  }

}

