import { Injectable } from '@angular/core';
import { DatabaseOperationsService } from '../database-operations.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators'
//import { user } from '../../../../models/userLogin';
import { SessionVariables } from '../../app.settings'
import { UserService } from '../user/user.service';


@Injectable({ 
    providedIn: 'root' 
})
export class AuthenticationService {

    constructor(private http: HttpClient, private restService: DatabaseOperationsService, private user: UserService) { }
    login(logindata) {
        return this.restService.login(logindata).pipe(map(res => {            
            return res;
        }))
    }    
    logout() {
        localStorage.removeItem(SessionVariables.CurrentUser);
    }
}
