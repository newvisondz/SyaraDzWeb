import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mission-home',
  templateUrl: './mission-home.component.html',
  styleUrls: ['./mission-home.component.scss']
})
export class MissionHomeComponent implements OnInit {
  @Input() title : String = "Notre Mission";
  @Input() content : String = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  @Input() author : String = "Bouhenniche Sihem";
  @Input() role : String = "Scrum Master";

  constructor() { }

  ngOnInit() {
  }

}
