import { Component, OnInit } from '@angular/core';
import { PortalService } from '../services/portal.service';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {
  CourseData: any = [];

  constructor(private service: PortalService,private userService:UserService,private router:Router) { }

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
  onStartCourse(id) {
    this.userService.setItemtoStorage("courseId", id);
    this.router.navigate(['/startcourse']);
  }

}
