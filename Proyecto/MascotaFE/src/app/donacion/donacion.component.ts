import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterURLService} from "../service/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.css']
})
export class DonacionComponent implements OnInit {

  title: string = "Donaciones";
  nuevaDonacion = {};
  donaciones = [];
  personas = [];
  disabledButtons = {
    NuevaDonacionFormSubmitButton: false
  };
  constructor(private _http: Http,
              private _masterURL: MasterURLService) {
  }

  ngOnInit() {
    this._http.get(this._masterURL.url + "Donacion")
      .subscribe(
        (res: Response) => {
          this.donaciones = res.json()
            .map((value) => {
              value.formularioCerrado = true;
              return value;
            });
        },
        (err) => {
          console.log(err);
        }
      );
    this._http.get(this._masterURL.url + "Persona")
      .subscribe(
        (res: Response) => {
          this.personas = res.json()
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

  crearDonacion(formulario:NgForm) {
    this.disabledButtons.NuevaDonacionFormSubmitButton = true;
    this._http.post(this._masterURL.url + "Donacion", {
      cantidad: formulario.value.cantidad,
      idPersona: formulario.value.idPersona
    }).subscribe(
      (res) => {
        console.log("No hubo Errores");
        console.log(res);
        this.donaciones.push(res.json());
        this.nuevaDonacion = {};
        this.disabledButtons.NuevaDonacionFormSubmitButton= false;
      },
      (err) => {
        this.disabledButtons.NuevaDonacionFormSubmitButton = false;
        console.log("Ocurrio un err or", err);
      },
      () => {
      }
    );
  }


}
