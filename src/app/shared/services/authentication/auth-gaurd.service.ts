import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SessionVariables } from '../../app.settings';

@Injectable({ 
    providedIn: 'root' 
})
export class AuthGaurdService implements CanActivate {

    constructor(private router: Router) { }
    canActivate() {
        
        if (sessionStorage.getItem(SessionVariables.CurrentUser)) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }

    }

}
