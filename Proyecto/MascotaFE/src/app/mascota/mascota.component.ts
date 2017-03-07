import { Component, OnInit } from '@angular/core';
import {MasterURLService} from "../service/master-url.service";
import {Http, Response} from "@angular/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css'],
  inputs:['activeColor','baseColor','overlayColor']
})
export class MascotaComponent implements OnInit {
  title: string = "Ingresa tu información";
  subtitle: string = "Listado de mascotas";
  nuevaMascota= {};
  mascotas = [];
  generos=[{genero:"Macho"},{genero:"Hembra"}];
  tipos=[{tipo:"Perro"},{tipo:"Gato"},{tipo:"otro"}];
  tamanios=[{tipo:"pequeño"},{tipo:"mediano"},{tipo:"grande"}];
  disabledButtons = {
    NuevaMascotaFormSumitButton: false
  };

  constructor(private _http: Http,
              private  _masterURL: MasterURLService) { }

  ngOnInit() {
    this._http.get(this._masterURL.url + "Mascota")
      .subscribe(
        (res: Response) => {
          this.mascotas = res.json()
            .map((value) => {
              value.formularioCerrado = true;
              return value;
            });
        },
        (err) => {
          console.log(err);
        }
      );
  }
  crearMascota(formulario: NgForm) {
    console.log("No se que va a imprimir: esperemso al body");
    console.log(formulario);
    this.disabledButtons.NuevaMascotaFormSumitButton = true;
    this._http.post(this._masterURL.url + "Mascota", {
      nombre: formulario.value.nombre,
      edad: formulario.value.edad,
      foto: formulario.value.foto,
      tipo: formulario.value.tipo,
      genero: formulario.value.genero,
      estado:"activo",
      tamanio: formulario.value.tamanio,
    }).subscribe(
      (res) => {
        console.log("No existieron errores");
        console.log(res);
        this.mascotas.push(res.json());
        this.nuevaMascota = {};
        this.disabledButtons.NuevaMascotaFormSumitButton = false;
      },
      (err) => {
        this.disabledButtons.NuevaMascotaFormSumitButton = false;
        console.log("Ocurrio un error", err);
      },
      () => {
        console.log("Se ejecuto a función")
      }
    );
  }

}
