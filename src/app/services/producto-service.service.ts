import { Producto } from './../producto';
import { HttpClient } from '@angular/common/http';//para realizar pettionesal backend
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//para poder inyectar esta clase de servicio en otras clases
@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  private urlBase = "http://localhost:8081/inventario-app/productos";// /productos

  //aqui inyectamos el httpClient
  constructor(private clienteHttp: HttpClient) { }

  //metodo para listar, esto retornara un objeto de tipo observable
  obtenerProductosLista():Observable<Producto[]>{
    return this.clienteHttp.get<Producto[]>(this.urlBase); //como parametro 
  }


  //metodo para agrgar el producto
  agregarProducto(producto: Producto): Observable<Object>{
    return this.clienteHttp.post(this.urlBase, producto)//enviamos a la ruta de agrgar con el objeto tambien
  }


  //metodo pa obtener el producto por su id
  obtenerProductoPorId(id:number){
    return this.clienteHttp.get<Producto>(`${this.urlBase}/${id}`);
    //con esto regresamos el objeto de tipo producto q estamos solicitando por el id
  }

  //metodo para realizar la edicion
  editarProducto(id:number, producto:Producto):Observable<Object>{
    return this.clienteHttp.put(`${this.urlBase}/${id}`, producto);//retornamos el id y el objeto, enviando al backend
  }


  //metodo servicion para elimianr el producto
  eliminarProducto(id:number):Observable<Object>{
    //metodo http de borrar parametro el id
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);//retornamos el id y el objeto, enviando al backend
  }
}
