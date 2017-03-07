import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {PersonaComponent} from "./persona/persona.component";
import {AdopcionComponent} from "./adopcion/adopcion.component";
import {DonacionComponent} from "./donacion/donacion.component";
import {MascotaComponent} from "./mascota/mascota.component";
/**
 * Created by Christian on 04/03/2017.
 */
export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path:'persona', component: PersonaComponent },
  {path:'adopcion',component: AdopcionComponent},
  //{path: 'mascota/:idPersona/album', component:
 // AdopcionComponent},
  {path:'donacion',component: DonacionComponent},
  {path:'mascota',component: MascotaComponent}
  //{path: 'artista/:idArtista/album', component: AlbumComponent,
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
