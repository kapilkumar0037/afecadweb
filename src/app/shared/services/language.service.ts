import { Injectable } from '@angular/core';

@Injectable({ 
  providedIn: 'root' 
})
export class LanguageService {

  constructor() { }
  getCurrentLanguage() {
    if (localStorage.getItem("lang")) {
      return localStorage.getItem("lang");
    }
  }  
  setCurrentLanguage(value) {
    localStorage.setItem("lang", value);
  }
}
