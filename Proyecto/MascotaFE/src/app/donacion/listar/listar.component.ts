import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterURLService} from "../../service/master-url.service";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {
  private devices: string[];
  private selectedDevice: string;
  onChange(newValue) {
    this.devices = 'one two three'.split(' ');
    this.selectedDevice = 'two';
    this._http.get(this._masterURL.url + "Donacion?idPersona="+newValue)
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
//    console.log(newValue);
    this.selectedDevice = newValue;
    // ... do other stuff here ...
  }

  donaciones = [];
  personas = [];
  constructor(private _http: Http,
              private _masterURL: MasterURLService) {
  }

  ngOnInit() {
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

  borrarDonacion(id:number){
    this._http.delete(this._masterURL.url+'Donacion/'+id).subscribe(
      (res)=>{
        let donacionBorrado=res.json();
        this.donaciones=this.donaciones.filter(value=>donacionBorrado.id!=value.id);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}
