import { Component, OnInit } from '@angular/core';
import { PortalService } from 'src/app/core/services/portal.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

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
  UserId=0;
  username="";
  constructor(private service: PortalService, private router: Router,private userService:UserService) { }

  ngOnInit() {
    this.UserId=this.userService.getItemFromStorage("userId");
    this.username=this.userService.getItemFromStorage("username");
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
        "Lang": this.courseLang,
        "UserId":this.UserId,
        "User_Name":this.username
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
