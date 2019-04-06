import { Component, OnInit } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-basicdetails',
  templateUrl: './basicdetails.component.html',
  styleUrls: ['./basicdetails.component.css']
})
export class BasicdetailsComponent implements OnInit {
  basicDetailsForm: any = {};
  countryList: any[];
  coursesList: any[];
  messages: any = {};
  constructor(private service: PortalService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.getCountries();
  }
  saveBasicDetails(basicDetailsForm: any) {
    if (basicDetailsForm.password == basicDetailsForm.confirmPassword) {
      this.service.saveBasicDetails(basicDetailsForm).subscribe((data) => {

        this.userService.setItemtoStorage("userId", data);
        this.userService.setItemtoStorage("username", basicDetailsForm.userName);
        this.router.navigate(['/selectcourse']);
      }, (error) => {
        console.log(error)

      })
    }
    else 
    {
     this.messages.error = "Password do not match."
    } 
  }
  getCourses() {
    this.service.getCourses("").subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error)
    })
  }
  getCountries() {
    this.service.getCountries("").subscribe((data) => {
      this.countryList = data;
      console.log(data);
    }, (error) => {
      console.log(error)

    })
  }
  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();

    }
  }
}
