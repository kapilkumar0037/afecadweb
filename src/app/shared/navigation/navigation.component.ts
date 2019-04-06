import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private userService:UserService) { }
  username="";
  ngOnInit() {
    this.username=this.userService.getItemFromStorage("username");

  }

}
