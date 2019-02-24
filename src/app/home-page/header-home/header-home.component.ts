import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../services/home-page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent implements OnInit {
  header : object;

  headerSubscription: Subscription;
  constructor(private homePageService:HomePageService) { }

  ngOnInit() {
    this.headerSubscription = this.homePageService.headerSubject.subscribe(
    (header: object) => {
        this.header = header;
      }
    );
    this.homePageService.emitHeaderSubject();
  }

}
