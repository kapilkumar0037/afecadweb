import { Component, OnInit } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectcourse',
  templateUrl: './selectcourse.component.html',
  styleUrls: ['./selectcourse.component.css']
})
export class SelectcourseComponent implements OnInit {
  CourseData: any = [];
  selectedCourse = 0;
  courseLang: any = "";
  CourseDesc: any = "";
  constructor(private service: PortalService, private router: Router) { }

  ngOnInit() {
    this.getCourses();
  }
  getCourses() {
    this.service.getCourses("").subscribe((data) => {
      if (data) {
        this.CourseData = data;
        console.log(this.CourseData)
      }
    }, (error) => {
      console.log(error)
    })
  }
  onCourseChange() {
    if (this.selectedCourse !== 0) {
      let course = this.CourseData.find(p => p.ID == this.selectedCourse);
      if (course) {
        this.courseLang = course.Lang;
        this.CourseDesc = course.Course_Desc;
      }
    }
  }
  submitCourse() {
    if (this.selectedCourse !== 0) {
      let json = {
        "Course_ID": this.selectedCourse,
        "Lang": this.courseLang
      }
      this.service.saveCourses(json).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/paymentdetails']);
      }, (error) => {
        console.log(error)

      })
    }
  }
}
