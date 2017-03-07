import { Component, OnInit } from '@angular/core';
import {MasterURLService} from "../service/master-url.service";
import {Http} from "@angular/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  title: string = "Ingresa tu información";
  nuevaPersona= {};
  personas = [];
  disabledButtons = {
    NuevaPersonaFormSumitButton: false
  };

  constructor(private _http: Http,
              private  _masterURL: MasterURLService) { }

  ngOnInit() {
  }
  crearPersona(formulario: NgForm) {
    console.log("No se que va a imprimir: esperemso al body");
    console.log(formulario);
    this.disabledButtons.NuevaPersonaFormSumitButton = true;
    this._http.post(this._masterURL.url + "Persona", {
      nombre: formulario.value.nombre,
      alias: formulario.value.alias,
      direccion: formulario.value.direccion,
      telefono: formulario.value.telefono,
      correo: formulario.value.correo,
      password: formulario.value.password
    }).subscribe(
      (res) => {
        console.log("No existieron errores");
        console.log(res);
        this.personas.push(res.json());
        this.nuevaPersona = {};
        this.disabledButtons.NuevaPersonaFormSumitButton = false;
      },
      (err) => {
        this.disabledButtons.NuevaPersonaFormSumitButton = false;
        console.log("Ocurrio un error", err);
      },
      () => {
        console.log("Se ejecuto a función")
      }
    );
  }
}
