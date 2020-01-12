import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevaPeliculaComponent } from './nueva-pelicula/nueva-pelicula.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { ButacaService } from './services/butaca.service';
import { CompraService } from './services/compra.service';
import { PeliculaService } from './services/pelicula.service';
import { SalaService } from './services/sala.service';
import { SesionService } from './services/sesion.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SesionPeliculaComponent } from './sesion-pelicula/sesion-pelicula.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DialogMessageComponent } from './dialog-message/dialog-message.component';
import { ProcesarCompraComponent } from './procesar-compra/procesar-compra.component';
import { EntradasUsuarioComponent } from './entradas-usuario/entradas-usuario.component';
import { NuevaCriticaComponent } from './nueva-critica/nueva-critica.component';


@NgModule({
  declarations: [
    AppComponent,
    NuevaPeliculaComponent,
    SesionPeliculaComponent,
    CabeceraComponent,
    DialogMessageComponent,
    ProcesarCompraComponent,
    EntradasUsuarioComponent,
    NuevaCriticaComponent
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
    MatToolbarModule,
    MatSnackBarModule,
    MatGridListModule,
    MatDialogModule,
    MatStepperModule,
    MatTableModule,
    MatProgressBarModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ButacaService, CompraService, PeliculaService, SalaService, SesionService],
  entryComponents: [DialogMessageComponent,NuevaCriticaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
