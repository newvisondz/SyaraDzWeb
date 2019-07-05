import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../services/home-page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent implements OnInit {
  header :HeaderObject;

  headerSubscription: Subscription;
  constructor(private homePageService:HomePageService) { }

  ngOnInit() {
    this.headerSubscription = this.homePageService.headerSubject.subscribe(
    (header: HeaderObject) => {
        this.header = header;
      }
    );
    this.homePageService.emitHeaderSubject();
  }

}

interface HeaderObject{
  title: string;
  citation : string;
  statics : []
}
