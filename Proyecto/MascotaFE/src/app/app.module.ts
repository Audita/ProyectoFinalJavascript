import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { DonacionComponent } from './donacion/donacion.component';
import { MascotaComponent } from './mascota/mascota.component';
import { PersonaComponent } from './persona/persona.component';
import {MasterURLService} from "./service/master-url.service";
import {routing} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdopcionComponent,
    DonacionComponent,
    MascotaComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing],
  providers: [
    MasterURLService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
