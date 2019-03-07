import { Component, OnInit } from '@angular/core';
import {VgAPI} from 'videogular2/core';

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
  preload:string = 'auto';
  api:VgAPI;
  constructor() { }
  playlist: Array<IMedia> = [
    {
        title: 'Pale Blue Dot',
        src: 'http://static.videogular.com/assets/videos/videogular.mp4',
        type: 'video/mp4'
    },
    {
        title: 'Big Buck Bunny',
        src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
        type: 'video/mp4'
    },
    {
        title: 'Elephants Dream',
        src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
        type: 'video/mp4'
    }
];
currentIndex = 0;
    currentItem: IMedia = this.playlist[ this.currentIndex ];
 
    onClickPlaylistItem(item: IMedia,index) {
        this.currentIndex = index;
        this.currentItem = item;
    }
  ngOnInit() {
  }
  onPlayerReady(api:VgAPI) {
    this.api = api;
}
}
