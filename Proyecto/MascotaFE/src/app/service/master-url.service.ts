import { Injectable } from '@angular/core';

@Injectable()
export class MasterURLService {
  private _url:string;
  constructor() {
    this._url="http://localhost:1337/";
//    this._url="https://examen-twj-castillochristian-cchristico.c9users.io/";
  }
  get url():string{
    return this._url;
  }
  set url(nuevoUrl){
    this._url=nuevoUrl;
  }

}
