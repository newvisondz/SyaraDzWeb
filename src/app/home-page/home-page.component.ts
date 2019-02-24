import { Component, OnInit, Input } from '@angular/core';
import { HomePageService } from './services/home-page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title : string;
  links : any[];
  linkSubscription: Subscription;
  constructor(private homePageService:HomePageService) {
   }

  ngOnInit() {
    this.title = this.homePageService.title;

    this.linkSubscription = this.homePageService.linksSubject.subscribe(
      (links: any[]) => {
        this.links = links;
      }
    );
    this.homePageService.emitLinkSubject();
  }
}
