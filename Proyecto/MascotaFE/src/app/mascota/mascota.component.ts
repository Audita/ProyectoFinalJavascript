import { Component, OnInit } from '@angular/core';
import {MasterURLService} from "../service/master-url.service";
import {Http} from "@angular/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css'],
  inputs:['activeColor','baseColor','overlayColor']
})
export class MascotaComponent implements OnInit {
  title: string = "Ingresa tu información";
  nuevaMascota= {};
  mascotas = [];
  disabledButtons = {
    NuevaMascotaFormSumitButton: false
  };
  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';

  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = '';

  handleDragEnter() {
    this.dragging = true;
  }

  handleDragLeave() {
    this.dragging = false;
  }

  handleDrop(e) {
    e.preventDefault();
    this.dragging = false;
    this.handleInputChange(e);
  }

  handleImageLoad() {
    this.imageLoaded = true;
  //  this.iconColor = this.overlayColor;
  }

  handleInputChange(e) {
    let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    let pattern = /image-*/;
    let reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    this.loaded = true;
  }

  _setActive() {
   // this.borderColor = this.activeColor;
    if (this.imageSrc.length === 0) {
    //  this.iconColor = this.activeColor;
    }

//  _setInactive() {
  //  this.borderColor = this.baseColor;
  //  if (this.imageSrc.length === 0) {
    //  this.iconColor = this.baseColor;
   // }
  //}

  };

  constructor(private _http: Http,
              private  _masterURL: MasterURLService) { }

  ngOnInit() {
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
      tamanio: formulario.value.tamanio
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
