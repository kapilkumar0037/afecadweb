import { Component, OnInit } from '@angular/core';
import { PortalService } from '../services/portal.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  Course: any = {};
  messages: any={};
  showError:boolean=false;
  showSuccess:boolean=false;
  constructor(private service: PortalService) { }

  ngOnInit() {
  }
  reset()
  {
    this.Course={};
  }
  
  addCourse(course: any) {
    this.showSuccess=false;
        this.showError=false;
    this.service.addCourse(course).subscribe((data) => {
      if (data === 1) {
        this.showSuccess=true;
        this.showError=false;
        this.messages.success = "Course added successfully. You will be redirected to upload videos."
      }
      else if (data === 0) {
        this.showSuccess=false;
        this.showError=true;
        this.messages.error = "Course with the same name and language already exist."
      }
      else {
        this.showSuccess=false;
        this.showError=true;
        this.messages.error = "Something went wrong! Please try again."

      }
    }, (error) => {
      this.showSuccess=false;
        this.showError=true;
      this.messages.error = "Something went wrong! Please try again."
    })
  }

}
