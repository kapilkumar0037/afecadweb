import { Injectable } from '@angular/core';
import { Global } from '../global';
import { BehaviorSubject, Observable } from 'rxjs';
//import { Observable } from 'rxjs/Rx';
@Injectable({ 
  providedIn: 'root' 
})
export class LoaderService {
  private IsLoading$: BehaviorSubject<boolean>;
  constructor() {
    this.IsLoading$ = new BehaviorSubject(false);
  }

  setHttpStatus(inFlight: boolean) {
    this.IsLoading$.next(inFlight);
  }

  getHttpStatus(): Observable<boolean> {
    return this.IsLoading$.asObservable();
  }

}
