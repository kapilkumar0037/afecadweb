import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map'
//import { OperationResult } from '../../../models/operation';
import { AppConfig } from '../app.config';
import { Global } from '../global';



const httpOptionsLogin = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','APIURL': Global.Sever.toString() }),
};
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({ 
  providedIn: 'root' 
})
export class DatabaseOperationsService {
  staticConfig: any = {};
  constructor(private http: HttpClient, private config: AppConfig) { }

  login(logindata) {
    let data = "grant_type=password&username=" + encodeURIComponent(logindata.username) + "&password=" + encodeURIComponent(logindata.password) + "&DBPClientid=" + encodeURIComponent(logindata.clientId) + "&IsPortal=" + encodeURIComponent('true');
    return this.http.post<any>(this.config.ServerWithLoginUrl, data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','APIURL': Global.Sever.toString() }),
    });
  };
  
  postApiReq(Controller, Method, data) {
    return this.http.post<any>(this.config.ServerWithApiUrl, data,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json','APIURL': this.config.ServerWithApiUrl + Controller + '/' + Method })
    }); 
  }
}
