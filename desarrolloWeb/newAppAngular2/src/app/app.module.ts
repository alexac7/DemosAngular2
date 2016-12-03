import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { BotonSiNoComponent } from './boton-si-no/boton-si-no.component';
import { ListadoPreguntasComponent } from './listado-preguntas/listado-preguntas.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    BotonSiNoComponent,
    ListadoPreguntasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
