import { Injectable } from '@angular/core';
import { Global } from '../global';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
//import { Observable } from 'rxjs/Rx';
@Injectable({ 
  providedIn: 'root' 
})
export class LoaderService {
  public IsLoading$: Subject<boolean>;
  constructor() {
    this.IsLoading$ = new Subject();
  }

  setHttpStatus(inFlight: boolean) {
    this.IsLoading$.next(inFlight);
  }

  getHttpStatus(): Observable<boolean> {
    return this.IsLoading$;
  }

}
