import { Injectable } from '@angular/core';
import { SessionVariables } from '../../app.settings';
import * as CryptoJS from 'crypto-js';

@Injectable({ 
  providedIn: 'root' 
})
export class UserService {

  user: any = {};
  constructor() { }
  //key = CryptoJS.enc.Utf8.parse('SEB0808080808DBP');
  secret = CryptoJS.enc.Utf8.parse('SEB0808080808DBP');
  getCurrentUser() {
    if (sessionStorage.getItem(SessionVariables.CurrentUser)) {
      var decryptedData = this.decrypt(sessionStorage.getItem(SessionVariables.CurrentUser));
      return decryptedData;
    }
  }
  getToken() {
    
    if (sessionStorage.getItem(SessionVariables.CurrentUser)) {
      this.user = this.decrypt(sessionStorage.getItem(SessionVariables.CurrentUser));
      return this.user.access_token;
    }
  }
  getUsername() {
    if (sessionStorage.getItem(SessionVariables.CurrentUser)) {
      this.user = this.decrypt(sessionStorage.getItem(SessionVariables.CurrentUser));
      return this.user.username;
    }
  }
  setCurrentUser(value) {
    sessionStorage.setItem(SessionVariables.CurrentUser, this.encrypt(value));
  }
  removeCurrentUser() {
    sessionStorage.removeItem(SessionVariables.CurrentUser);
  }
  setItemtoStorage(key, value) {
    sessionStorage.setItem(key, this.encrypt(value));
  }
  getItemFromStorage(key) {
    if (sessionStorage.getItem(key)) {
      var decryptedData = this.decrypt(sessionStorage.getItem(key));
      return decryptedData;
    }
    else 
      return null;
  }
  removeItemFromStorage(key) {
    return sessionStorage.removeItem(key);
  }

  encrypt(data) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), this.secret,
      {
        keySize: 128 / 8,
        iv: this.secret,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }).toString();
  }

  decrypt(data) {
    return JSON.parse(CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(data, this.secret,
      {
        keySize: 128 / 8,
        iv: this.secret,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      })));
  }
}
