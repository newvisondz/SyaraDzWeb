import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  infoPage = {
    title : "Tableau de bords",
    icon : "fa-tachometer-alt",
    stats : [
      {
        bgClass : "primary",
        icon : "fa-shopping-cart",
        count : "26",
        label : "Commandes"
      },
      {
        bgClass : "success",
        icon : "fa-money-bill-alt",
        count : "26",
        label : "Voitures vendus"
      },
      {
        bgClass : "warning",
        icon : "fa-store",
        count : "26",
        label : "Voitures en stock"
      },
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
