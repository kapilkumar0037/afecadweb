import { Component, OnInit } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-basicdetails',
  templateUrl: './basicdetails.component.html',
  styleUrls: ['./basicdetails.component.css']
})
export class BasicdetailsComponent implements OnInit {
  basicDetailsForm: any = {};
  countryList: any [];
 
  constructor(private service: PortalService , private router : Router) { }

  ngOnInit() {
   this.getCountries();
  }
  saveBasicDetails(basicDetailsForm:any) {
    this.service.saveBasicDetails(basicDetailsForm).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/selectcourse']);
    }, (error) => {
      console.log(error)
     
    })
  }
 
  getCountries(){
    this.service.getCountries("").subscribe((data) => {
      debugger;
      this.countryList = data;
      console.log(data);
    }, (error) => {
      console.log(error)
    
    })
  }
}
