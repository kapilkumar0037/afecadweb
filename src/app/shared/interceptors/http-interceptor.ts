import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../services/user/user.service';
//import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/observable/throw'
//import 'rxjs/add/operator/catch';
import { SessionVariables } from '../app.settings';
import { LoaderService } from '../services/loader.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';

@Injectable({ 
  providedIn: 'root' 
})
export class TokenHttpInterceptor implements HttpInterceptor {
  constructor(private user: UserService, private loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.setHttpStatus(true);
    if (this.user.getToken()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.user.getToken()}`
        }
      });
    }
    return next.handle(req).pipe(catchError((error, caught) => {
      console.log(error);
      this.handleAuthError(error);
      return of(error);
    }) as any);
  }
  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401) {
      //navigate /delete cookies or whatever
      console.log('handled error ' + err.status);
      //this.router.navigate([`/login`]);
      // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
      return of(err.message);
    }
    this.loaderService.setHttpStatus(false);
    throw err;
  }
}
