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

  constructor(private clienteHttp: HttpClient) { }

  //metodo para listar, esto retornara un objeto de tipo observable
  obtenerProductosLista():Observable<Producto[]>{
    return this.clienteHttp.get<Producto[]>(this.urlBase); //como parametro 
  }
}
