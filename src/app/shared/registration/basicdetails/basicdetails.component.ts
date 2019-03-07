import { Component, OnInit } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal.service';

@Component({
  selector: 'app-basicdetails',
  templateUrl: './basicdetails.component.html',
  styleUrls: ['./basicdetails.component.css']
})
export class BasicdetailsComponent implements OnInit {
  basicDetailsForm: any = {};
  constructor(private service: PortalService) { }

  ngOnInit() {
  }
  saveBasicDetails(basicDetailsForm:any) {
    this.service.saveBasicDetails(basicDetailsForm).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error)
    })
  }
  getCourses() {
    this.service.getCourses("").subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error)
    })
  }
}
