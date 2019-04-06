import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/core';
import { PortalService } from '../services/portal.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';

export interface IMedia {
  title: string;
  src: string;
  type: string;
}

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  preload: string = 'auto';
  api: VgAPI;
  courseId: number;
  constructor(private service: PortalService, private route: ActivatedRoute,private userService:UserService) { }
  playlist: any = [];
  currentIndex = 0;
  currentItem: any = {};

  onClickPlaylistItem(item: IMedia, index) {
    this.currentIndex = index;
    this.currentItem = item;
  }
  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
       this.courseId = this.userService.getItemFromStorage("courseId");    
      this.GetCourseVideos(this.courseId);

    // })
  }
  onPlayerReady(api: VgAPI) {
    this.api = api;
  }

  GetCourseVideos(id: number) {
    this.service.getCourseVideos({ "courseId": id }).subscribe((data) => {
      if (data && data.length > 0) {
        data.forEach(el => {
          let item: any = {};
          item.src = el.FilePath;
          item.title = el.OriginalVideoName;
          this.playlist.push(item);
        });
        this.currentItem = this.playlist[this.currentIndex];

      }
    }, (error) => {
      console.log(error)
    })
  }
}
