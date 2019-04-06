import { Component, OnInit } from '@angular/core';
import { PortalService } from '../services/portal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  registraionData: any = [];
  constructor(private service: PortalService, private router: Router) { }

  ngOnInit() {
    this.GetRegistraionData();
  }

  GetRegistraionData() {
    this.service.GetRegistraionData("").subscribe((data) => {
      console.log(data);
      this.registraionData = data;
    }, (error) => {
      console.log(error)

    })
  }
  approveUser(userId) {
    this.service.approveUser({"userid":userId}).subscribe((data) => {
      console.log(data);
      alert("User created.")
    }, (error) => {
      console.log(error)

    })
  }

}
