import { Producto } from './../producto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent {
  //la lista de productos
  productos: Producto[] | undefined;
          //nombre :tipodeDato
  constructor(private productoServicio: ProductoServiceService){}
  //ProductoServiceService con este service podremos
}

//metodo para 
