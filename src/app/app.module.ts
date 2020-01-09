import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevaPeliculaComponent } from './nueva-pelicula/nueva-pelicula.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';

import { ButacaService } from './services/butaca.service';
import { CompraService } from './services/compra.service';
import { PeliculaService } from './services/pelicula.service';
import { SalaService } from './services/sala.service';
import { SesionService } from './services/sesion.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SesionPeliculaComponent } from './sesion-pelicula/sesion-pelicula.component';


@NgModule({
  declarations: [
    AppComponent,
    NuevaPeliculaComponent,
    SesionPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatChipsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ButacaService, CompraService, PeliculaService, SalaService, SesionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
