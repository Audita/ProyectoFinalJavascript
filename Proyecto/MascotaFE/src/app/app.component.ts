import { Component } from '@angular/core';
import {Http, Response} from "@angular/http";
//import { AuthModule } from 'angular2-auth';
import {MasterURLService} from "./service/master-url.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isLogged:boolean;
  usuarioSistema= {};
  constructor(private _http: Http,
              private  _masterURL: MasterURLService) { }

  login(event, username,password){
    console.log("_"+username+"_-_"+password);
    this._http.get(this._masterURL.url + "persona?alias="+username)
      .subscribe(
        (res: Response) => {
          this.usuarioSistema = res.json()
            .filter(function(value,key){
              console.log("value",value);
              console.log("key",key);
              return value==password && key=="password";
            });
          console.log(this.isLogged);
        },
        (err) => {
          console.log(err);
         // this.isLogged =false;
        }

      );
    console.log(this.usuarioSistema);
  }
}
