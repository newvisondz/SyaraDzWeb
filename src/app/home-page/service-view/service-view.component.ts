import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../services/home-page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.scss']
})
export class ServiceViewComponent implements OnInit {
  servicesArray : any[];

  serviceSubscription: Subscription;
  constructor(private homePageService:HomePageService) { }

  ngOnInit() {
    this.serviceSubscription = this.homePageService.serviceSubject.subscribe(
      (servicesArray: any[]) => {
        this.servicesArray = servicesArray;
      }
    );
    this.homePageService.emitServiceSubject();
  }

}
