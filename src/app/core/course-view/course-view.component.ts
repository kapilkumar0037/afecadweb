import { Component, OnInit } from '@angular/core';
import { PortalService } from '../services/portal.service';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {
  CourseData: any = [];
  constructor(private service: PortalService) { }

  ngOnInit() {
    this.getCourses();
  }
  getCourses() {
    this.service.getCourses("").subscribe((data) => {
      if (data) {
        this.CourseData = data;
      }
    }, (error) => {
      console.log(error)
    })
  }
}
