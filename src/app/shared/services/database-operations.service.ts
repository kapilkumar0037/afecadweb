import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
////import 'rxjs/add/operator/map'
//import { OperationResult } from '../../../models/operation';
import { AppConfig } from '../app.config';
import { SessionVariables } from '../app.settings';
import { Global } from '../global';



const httpOptionsLogin = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
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

    //Global.loginType=LoginType.Direct;
    let data = "grant_type=password&username=" + encodeURIComponent(logindata.username) + "&password=" + encodeURIComponent(logindata.password) + "&DBPClientid=" + encodeURIComponent(logindata.clientId) + "&IsPortal=" + encodeURIComponent('true');
    return this.http.post<any>(this.config.ServerWithLoginUrl, data, httpOptionsLogin);
  };
  LaunchAsAdmin(logindata) {

    //Global.loginType=LoginType.Launch;
    let data = "grant_type=password&username=" + encodeURIComponent(logindata.username) + "&password=" + encodeURIComponent(logindata.password) + "&DBPClientid=" + encodeURIComponent(logindata.clientId) + "&IsPortal=" + encodeURIComponent('true') + "&IsLoginAsAdmin=" + encodeURIComponent('true');
    return this.http.post<any>(this.config.ServerWithLoginUrl, data, httpOptionsLogin);
  };
  postApiReq(Controller, Method, data) {
    return this.http.post<any>(this.config.ServerWithApiUrl + Controller + '/' + Method, data, httpOptions);
  }
  postReqContext(Controller, Method, data) {    
    let uploadReq = new HttpRequest('POST', this.config.ServerWithApiUrl + Controller + '/' + Method, data, {
      reportProgress: true,
    });
    return this.http.request(uploadReq);
  }

}
