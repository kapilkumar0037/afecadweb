import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessages: any = {};
  model: any = {};
  EnCriptedcredentials: any = {};
  invalidcredentials: boolean = false;
  constructor( private route: ActivatedRoute,
    private router: Router,
    private authentication: AuthenticationService, private userService: UserService) { }

  ngOnInit() {
  }

  login() {

    this.invalidcredentials = false;
    this.errorMessages.showErrorBlock = false;
    var key = CryptoJS.enc.Utf8.parse('SEB0808080808DBP');
    var iv = CryptoJS.enc.Utf8.parse('SEB0808080808DBP');
    this.EnCriptedcredentials.username = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(this.model.username), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
    this.EnCriptedcredentials.password = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(this.model.password), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
    this.EnCriptedcredentials.clientId = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(this.model.clientId), key,
      {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
    this.authentication.login(this.EnCriptedcredentials).subscribe(
      data => {

        if (!data && !data.hasOwnProperty("access_token")) {
          this.invalidcredentials = true;
          return false;
        } else {
          data.username = this.model.username;
          this.userService.setCurrentUser(data);          
          this.router.navigate(['courselist']);
        }
      },
      error => {
        this.errorMessages.showErrorBlock = true;
          this.errorMessages.erroeMessage = "Invalid username or password. Please try again.";
        console.log(error);      
        return false;
      });

  }
}
