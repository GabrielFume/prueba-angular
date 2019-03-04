import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios

import { PeliculasService } from './services/peliculas.service';


// Pipes

import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { GaleriaComponent } from './components/peliculas/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CursosComponent,
    PeliculasComponent,
    PeliculaImagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    HttpClientModule,
    HttpClientJsonpModule

  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
