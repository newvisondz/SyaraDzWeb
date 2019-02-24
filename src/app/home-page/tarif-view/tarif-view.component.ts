import { Component, OnInit, Input } from '@angular/core';
import { HomePageService } from '../services/home-page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tarif-view',
  templateUrl: './tarif-view.component.html',
  styleUrls: ['./tarif-view.component.scss']
})
export class TarifViewComponent implements OnInit {
  tarifArray : any[];

  tarifSubscription: Subscription;
  constructor(private homePageService:HomePageService) { }

  ngOnInit() {

    this.tarifSubscription = this.homePageService.tarifSubject.subscribe(
      (tarifArray: any[]) => {
        this.tarifArray = tarifArray;
      }
    );
    this.homePageService.emitTarifSubject();
  }

}
