import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  //componentes
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  //Modulos (Ruteo, Formularios)
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //Servicios que tengamos
  providers: [],
  //Por donde va a comenzar a trabajar mi aplicación
  bootstrap: [AppComponent]
})
export class AppModule { }
