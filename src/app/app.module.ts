import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { FormsModule } from '@angular/forms';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ProductoListaComponent,
    AgregarProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//traemos el modulo que ocuparemos
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule, //para asociar la vistas con el componente en typescript
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
