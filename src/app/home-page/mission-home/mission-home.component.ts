import { Component, OnInit, Input } from '@angular/core';
import { HomePageService } from '../services/home-page.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-mission-home',
  templateUrl: './mission-home.component.html',
  styleUrls: ['./mission-home.component.scss']
})
export class MissionHomeComponent implements OnInit {
  mission = {};

  missionSubscription: Subscription;
  constructor(private homePageService:HomePageService) { }

  ngOnInit() {
    this.missionSubscription = this.homePageService.missionSubject.subscribe(
    (mission) => {
        this.mission = mission;
      }
    );
    this.homePageService.emitMissionSubject();
  }

}
