import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoServiceService } from '../services/producto-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {
  //ya con el service nos estaaria llegando el objeto producto
  producto:Producto = new Producto();
  id!: number;
  
  
  constructor(private productService: ProductoServiceService, private enrutador: Router, private ruta: ActivatedRoute, private snackBar: MatSnackBar){}
  
  
  //este es el metodo que se ejecuta despues de nuestro contructor
  ngOnInit(){
    //recibiremos el parametro del id para buscarlo
    this.id  = this.ruta.snapshot.params['id'];//el id d parametro lo seteamos al objeto q creamos pata buscarlo
    this.productService.obtenerProductoPorId(this.id).subscribe({
      next:(datos)=>{
        this.producto = datos;//si conseguimos el objeto lo seteamos a nuestro objeto :D
        
      },
      error:(error:any)=>{
        console.log(error);
        
      }
    });
  }

  //metodo ejecutara la accion de editar
  onSubmit() {
  this.editarProducto();
  }

  //metodo que realiza la edicion mandamos los datos al backend
  editarProducto() {
    this.productService.editarProducto(this.id, this.producto).subscribe({//envia un metodo de tipo observable por eso tenemos q subscribirnos
      next: (datos)=>{
        this.irProductoLista()
        // Si la operación es exitosa, mostrar el mensaje
        this.snackBar.open('Operación realizada con éxito', 'Cerrar', {
          duration: 3000
        });
      },
      error: (error:any)=>{
        console.log(error);
        this.snackBar.open('Ocurrió un error', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }
  //redirigimos a productos, normal
  irProductoLista() {
    this.enrutador.navigate(['/productos']);//puesto en routing
  }
}
